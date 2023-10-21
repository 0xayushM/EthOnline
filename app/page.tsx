'use client'
import { useAccountAbstraction } from '@/context/accountAbstractionContext'
import Table from './components/Table';
import { useState } from 'react';
import { Inter,Jura } from 'next/font/google';
import {fadeIn} from '../variants'
import {motion } from 'framer-motion'

const jura = Jura({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
});

export default function Home() {
  const {
    loginWeb3Auth,
    isAuthenticated,
    ownerAddress // Add this userAddress state variable
  } = useAccountAbstraction();

  const [contractAddress, setContractAddress] = useState('')

  return (
      <div className={`flex min-h-screen ${isAuthenticated ? 'mt-10':'items-center h-screen'} justify-center transition-all duration-300 textSize font-bold ${jura.className}`}>
      
      {!isAuthenticated ? (
        <motion.div
          variants={fadeIn('up',0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
          <button className='lgShadow bg-gradient-to-r from-[#121212] to-[#190034] text-white rounded-md p-3' 
          onClick={loginWeb3Auth}
        >
          Connect Wallet
        </button>
        </motion.div>
        ) : (
          <div className='flex flex-col gap-y-8 w-[80%] lg:w-4/5 items-center '>
            <motion.div
              variants={fadeIn('down',0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'  
              className='flex flex-col md:flex-row items-center justify-between w-[80%] lg:w-4/5 gap-5'
            >
              <input className='text-[#121212] z-10 bg-white/80 p-3 w-full rounded-md outline-none justify-between' type='text' value={contractAddress} placeholder='Contract Address...' onChange={(e)=> setContractAddress(e.target.value)}/>
              <button className='lgShadow bg-gradient-to-r w-full from-[#121212] to-[#190034] text-white rounded-md p-3' onClick={loginWeb3Auth}>
                {ownerAddress.slice(0,5)}.....{ownerAddress.slice(38,44)}
              </button>
            </motion.div>
            <motion.div 
              variants={fadeIn('up',0.4)}
              initial='hidden'
              animate='show'
              exit='hidden' 
              className='lgShadow w-[80%] lg:w-4/5 bg-gradient-to-r from-[#121212] to-[#190034] text-white rounded-md flex items-center justify-center'
              >
                <Table/>
            </motion.div>
          </div>
        )}
    </div>
  );
}
