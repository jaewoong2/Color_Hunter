import type { NextPage } from 'next'
import Head from 'next/head'
import Colors from '../components/Colors'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tailwind Sidebar + Navbar Tutorial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-[calc(100vh-100px)] w-full">
        <div className="flex w-full justify-center">
          <Colors colors={['#9bc0be', '#d4d48e', '#eeee66', '#9fe055']} />
        </div>
      </div>
    </>
  )
}

export default Home
