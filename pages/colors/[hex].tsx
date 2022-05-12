import type { NextPage } from 'next'
import Head from 'next/head'
import Colors from '../../components/Colors'
import { useState } from 'react'
import {
  dehydrate,
  QueryClient,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from 'react-query'
import { ColorData } from '../api/color'
import { ColorsData } from '../api/color/[hex]'
import { useRouter } from 'next/router'

const fetchColors = async (hex: string): Promise<ColorsData> => {
  try {
    const res = await fetch('http://localhost:3000' + `/api/color/${hex}`)
    if (res.ok) {
      return res.json()
    }
    throw new Error('Network response not ok -Colors')
  } catch (err) {
    throw new Error('Network response not ok -Colors')
  }
}

const ColorHex: NextPage = () => {
  const router = useRouter()
  const { data }: UseQueryResult<ColorsData, Error> = useQuery<
    ColorsData,
    Error
  >('colors')

  return (
    <>
      <Head>
        <title>Random Color</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-[calc(100vh - 100px)] flex w-full">
        <div className="flex w-full justify-center">
          <Colors colors={data?.colors ?? []} />
        </div>
      </div>
    </>
  )
}

export default ColorHex

export async function getStaticProps({ params }) {
  const hex = params?.hex as string
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('colors', () => fetchColors(hex))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}
