// import { useTheme } from 'next-themes'
// import { APP_NAME } from '@/lib/consts'
import { createClient, WagmiConfig, chain } from 'wagmi'
import { ConnectKitProvider, getDefaultClient } from 'connectkit'


// Choose which chains you'd like to show
const chains = [chain.mainnet, chain.goerli];

const client = createClient(
	getDefaultClient({
		appName: 'My awesome dapp 👨🏻‍💻👩‍💻',
		autoConnect: false,
		chains,
	})
)

const Web3Provider = ({ children }) => {
	// const { resolvedTheme } = useTheme()

	return (
		<WagmiConfig client={client}>
			{/* <ConnectKitProvider mode={resolvedTheme as 'light' | 'dark'}>{children}</ConnectKitProvider> */}
      <ConnectKitProvider >{children}</ConnectKitProvider>
		</WagmiConfig>
	)
}

export default Web3Provider
