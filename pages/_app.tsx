import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import {
  DefaultOptions,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { useState } from 'react'
import { ReactQueryDevtools } from 'react-query/devtools'

const defaultOptions: DefaultOptions = {
  queries: {
    staleTime: 5 * 1000,
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient({ defaultOptions }))

  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </Hydrate>
      </QueryClientProvider>
    </Layout>
  )
}

export default MyApp
