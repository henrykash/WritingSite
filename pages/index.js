import Head from 'next/head'
import TopNav from '../Components/TopNav'
import Counter from '../Components/Counter'
//import Footer from '../Components/Footer'
import LandingSection from '../Components/Header'
import AboutUs from '../Components/AboutUs'
import PricingTiers from '../Components/PricingTiers'

const Homepage = () => {
  return (
    <div>
      <Head>
        <title>Premium workplace!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="Online Writing, Get work Done, Get remote work done" />
        <meta name="keywords" content="Writing, Online work, Post Work, Assignments" />
        <link href="https://fonts.googleapis.com/css?family=Lato|Poppins&display=swap" rel="stylesheet"></link>
      </Head>

      <TopNav />

      <main>
        <LandingSection />
        <br />
        <hr />

        <AboutUs />
        <br />
        <hr />

        <PricingTiers />
        <br />
        <hr />

        <Counter />
        <br />
        <hr />

        {/*<Testimonials />
        <br />*/}

      </main>

      {/*<Footer />*/}
    </div>
  )
}

export default Homepage
