import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Web3Provider from '../components/Web3Provider'
import ConnectWallet from '../components/WalletConnect'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3Provider>
    {/* Main container */}
    <div className="flex flex-col h-screen justify-between">
      <header className="h-16 ">
        <div className="absolute top-6 right-6">
          <ConnectWallet  />
        </div>
      </header>
    <main className="mb-auto "><Component {...pageProps} />
  
    </main>
    <Footer />
    
    </div>
    </Web3Provider>
    )
  }

export default MyApp
