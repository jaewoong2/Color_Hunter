# Next.js + Tailwind CSS + React-Query Example

## NextJS

### SSR / SSG

- SSG를 위한 NextJS 기능

  - `getStaticProps()`

    - 빌드 시 데이터를 fetch하여 static 페이지를 생성
    - `context.params` 로 동적 라우팅의 경로 이름을 가져온다.
    - `GetStaticProps` Type 사용
    - 빠르게 렌더링을 해준다

      ```ts
      // getStaticProps가 기본 props로 받는 context 객체의 구성
      params: Route Params Infomation
      req: HTTP request object
      res: HTTP response object
      query: 쿼리스트링
      preview: preview 모드 여부
      previewData: setPreviewData로 설정된 데이터

      // getStaticProps Retrun      props : 해당 컴포넌트로 리턴할 값 (선택적)
      revalidate : 페이지 재생성이 발생할 수 있는 시간(초). 기본값은 false이며 이게 거짓이면 다음 빌드때까지 페이지가 빌드된 상태로 캐시됨. (선택적)
      notFound : Boolean값, 404status를 보내는 것을 허용한다. (선택적)
      ```

  - `getStaticPaths()`

    - 동적 라우팅을 사용할 때, 어떤 페이지를 미리 Static으로 빌드할 지 정하는 api
      ```py
      getStaticPaths : 페이지 경로가 외부데이터에 연동된다.
      paths 안에 경로를 생성 하면 해당 경로를 생성 한다
      ex)
      paths = [{hex: 1}, {hex: 2}] => colors/hex/1, colors/hex/2
      fallback: true = paths 안에 생성한 경로 이외의 값이 들어와도 페이지 생성 fallback: false = paths 안에 생성한 경로 이외의 값이 들어오면 페이지 생성 안함
      ```

  - `getServerSideProps()`

    - getServerSideProps는 빌드와 상관없이, 매 페이지 요청마다 데이터를 서버로부터 가져옵니다.

      ```ts
      // getStaticProps가 기본 props로 받는 context 객체의 구성
      params: 다이나믹 라우트 페이지라면, params를 라우트 파라미터 정보를 가지고 있다.
      req: HTTP request object
      res: HTTP response object
      query: 쿼리스트링
      preview: preview 모드 여부 >공식문서
      previewData: setPreviewData로 설정된 데이터


      // getStaticProps Retrun
      props : 해당 컴포넌트로 리턴할 값 (선택적)

      redirect : 값 내부와 외부 리소스 리디렉션 허용한다 (선택적) 무조건
      { destination: string, permanent: boolean } 의 꼴이어야 한다.
      몇몇 드문 케이스에서 오래된 HTTP클라이언트를 적절히 리디렉션하기 위해 커스텀 status코드가 필요할 수 있는데, 그땐 permanent property 대신에 statusCode property를 이용한다.

      notFound : Boolean값, 404status를 보내는 것을 허용한다. (선택적)
      ```

## React Query

: isLoading, isError, data, Success, 데이터 캐싱 등 까다로운 기능 제공

### QueryClientProvider

- 가장 먼저 해야한다.
- nextJS에서 사용하기 위해서
- `_app.tsx` 에 최상단을 감싸준다

  ```tsx
  import { QueryClient, QueryClientProvider } from 'react-query'

  const defaultOptions: DefaultOptions = {
    queries: {
      staleTime: 5 * 1000,
    },
  }
  const queryClient = new QueryClient({ ...defaultOptions })

  function MyApp({ Component, pageProps }: AppProps) {
    return (
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    )
  }
  ```

### useQuery

- query를 fetch 시킬 때, 하는 Method
-
