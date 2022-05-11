import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { DefaultOptions, QueryClient, QueryClientProvider } from 'react-query'

const defaultOptions: DefaultOptions = {
  queries: {
    staleTime: 5 * 1000,
  },
}

const reactQueryClient = new QueryClient({ defaultOptions })
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <QueryClientProvider client={reactQueryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Layout>
  )
}

export default MyApp
