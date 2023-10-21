'use client'
import { useAccountAbstraction } from '@/context/accountAbstractionContext'

export default function Home() {
  const {
    loginWeb3Auth,
    isAuthenticated,
    ownerAddress // Add this userAddress state variable
  } = useAccountAbstraction();

  return (
    <div className={`flex ${isAuthenticated ? 'mt-5':'items-center h-screen'} justify-center transition-all duration-300`}>
      <button className='lgShadow bg-gradient-to-r from-[#121212] to-[#190034] text-white rounded-xl px-5 py-3' onClick={loginWeb3Auth}>
      {!isAuthenticated ? (
        <p>Connect Wallet</p>
        ) : (
        <p className=''>
          {ownerAddress.slice(0,5)}.....{ownerAddress.slice(38,44)}
        </p>
        )}
      </button>
    </div>
  );
}
