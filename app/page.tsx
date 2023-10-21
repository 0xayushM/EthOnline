'use client'
import { useAccountAbstraction } from '@/context/accountAbstractionContext'

export default function Home() {
  const {
    loginWeb3Auth,
    isAuthenticated,
    ownerAddress // Add this userAddress state variable
  } = useAccountAbstraction();

  return (
    <div className='flex items-center justify-center xl:h-screen h-full'>
      <button className='bg-blue-300 rounded-xl px-5 py-3' onClick={loginWeb3Auth}>
      {!isAuthenticated ? (
        <p>Connect Wallet</p>
        ) : (
        <p className='text-black'>
          {ownerAddress.slice(0,5)}.....{ownerAddress.slice(38,44)}
        </p>
        )}
      </button>
    </div>
  );
}
