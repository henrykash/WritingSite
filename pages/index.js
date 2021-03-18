import Head from 'next/head'
import TopNav from '../Components/TopNav'
import Counter from '../Components/Counter'
import LandingSection from '../Components/Header'
import AboutUs from '../Components/AboutUs'
import PricingTiers from '../Components/PricingTiers'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'
import {useState} from 'react';

const Homepage = () => {

  if(typeof window !== 'undefined'){
    const setTawk = () => {
      var Tawk_API = Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
              var s1 = document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                  s1.async=true;
                  s1.src='https://embed.tawk.to/604c4303067c2605c0b7e36a/1f0kubhnk';
                  s1.charset='UTF-8';
                  s1.setAttribute('crossorigin','*');
                  s0.parentNode.insertBefore(s1,s0);
      })();
      }
      setTawk()
  }
  else{
    console.log('What happened to the Tawk.io plugin?!')
  }
  return (
    <div className='overflow-y-hidden'>
      <Head>
        <title>Premium workplace!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="Online Writing, Get work Done, Get remote work done" />
        <meta name="keywords" content="Writing, Online work, Post Work, Assignments" />
        <link href="https://fonts.googleapis.com/css?family=Lato|Poppins&display=swap" rel="stylesheet"></link>
        {/*<script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.rawJsFromFile }}></script>*/}
      </Head>

      <TopNav />

      <body>
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

        <Testimonials />
        <br />
        <hr />

      </body>

      <Footer />
    </div>
  )
}

export default Homepage
