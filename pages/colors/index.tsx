import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import {
  dehydrate,
  QueryClient,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from 'react-query'
import Colors from '../../components/Colors'
import { ColorData } from '../api/color'
import { ColorsData } from '../api/color/[hex]'

const fetchColor = async (): Promise<ColorData> => {
  try {
    const res = await fetch('http://localhost:3000' + '/api/color')
    if (res.ok) {
      return res.json()
    }
    throw new Error('Network response not ok -Colors')
  } catch (err) {
    throw new Error('Network response not ok -Colors')
  }
}

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

const Color: NextPage = () => {
  const queryClient = useQueryClient()
  const [colors, setColors] = useState<string[] | undefined>([])

  const { isLoading }: UseQueryResult<ColorData, Error> = useQuery<
    ColorData,
    Error
  >('color', fetchColor, {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    onSuccess: async (data) => {
      await queryClient
        .fetchQuery<ColorsData, Error>('colors', () =>
          fetchColors(data?.hex.slice(1) ?? '')
        )
        .then((res) => {
          setColors(res?.colors)
        })
    },
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>Random Color</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-[calc(100vh - 100px)] flex w-full">
        <div className="flex w-full justify-center">
          <Colors colors={colors ?? []} />
        </div>
      </div>
    </>
  )
}

export default Color

export async function getServerSideProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('colors-cahce', () => fetchColors('ffffff'))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
