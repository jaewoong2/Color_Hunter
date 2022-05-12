import type { NextPage } from 'next'
import Head from 'next/head'
import Colors from '../../components/Colors'
import { dehydrate, QueryClient, useQuery, UseQueryResult } from 'react-query'
import { ColorsData } from '../api/color/[hex]'

const fetchColors = async (hex: string): Promise<ColorsData> => {
  try {
    // SSR / SSG 를 통해서 fetch를 하려면 절대 경로로 설정 해야함.
    // .env.local 을 이용해서 경로설정
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

// getStaticProps함수는 params를 받아 그에 해당하는 paths를 받아옵니다.
// CDN에 캐싱 되기 때문에 빠르다.
// 미리 생성된 paths는 캐싱되기 때문에 라우터로 페이지를 이동할 때 굉장히 빠른 랜더링 속도를 보여줍니다.

// getServerSideProps는 해당 페이지가 요청될 때 마다 재 요청 된다.
// getStaticProps 는 해당 페이지가 한번 빌드 되면 요청이 끝나지만, getServerSideProps는 동적으로 재요청 한다
// CDN에 캐싱되지 않기 때문에 느림

export async function getStaticProps({ params }: { params: { hex: string } }) {
  const hex = params?.hex as string
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('colors', () => fetchColors(hex))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

// getStaticPaths : 페이지 경로가 외부데이터에 연동된다
// paths 안에 경로를 생성 하면 해당 경로를 생성 한다 ex) paths = [{hex: 1}, {hex: 2}] => colors/hex/1, colors/hex/2
// fallback: true = paths 안에 생성한 경로 이외의 값이 들어와도 페이지 생성
// fallback: false = paths 안에 생성한 경로 이외의 값이 들어오면 페이지 생성 안함
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}
