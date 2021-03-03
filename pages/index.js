import Head from 'next/head'
import TopNav from '../Components/TopNav'
import Footer from '../Components/Footer'
import LandingSection from '../Components/LandingSection'

const Homepage = () => {
  return (
    <div>
      <Head>
        <title>Premium workplace!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Online Writing, Get work Done, Get remote work done" />
        <meta name="keywords" content="Writing, Online work, Post Work, Assignments" />
      </Head>

      <TopNav />

      <main>
        <LandingSection />
      </main>

      <Footer />
    </div>
  )
}

export default Homepage