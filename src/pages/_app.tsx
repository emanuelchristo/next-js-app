import { ApolloProvider } from '@apollo/client'
import apolloClient from '../lib/apolloClient'
import { Navbar } from '@/components/Navbar'

import '@/styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<ApolloProvider client={apolloClient()}>
			<Navbar />
			<Component {...pageProps} />
		</ApolloProvider>
	)
}

export default MyApp
