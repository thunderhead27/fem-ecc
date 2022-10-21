import Head from 'next/head'
import tw from 'twin.macro'
import Bar from '../components/bar'
import ChartContainer from './../components/chartContainer'

const IndexPage = () => (
  <div>
    <Head>
      <title>Frontend Mentor | Expenses Chart Component</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/images/favicon-32x32.png" />
    </Head>
    <div tw="flex items-center justify-center min-h-screen bg-cream">
      {/* Container */}
      <div tw="px-4 py-16 w-full sm:py-0 sm:px-0 sm:w-[540px] sm:h-[660px]">
        {/* Card Container */}
        <div tw="bg-cream flex flex-col">
          <Bar />
          <ChartContainer />
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage