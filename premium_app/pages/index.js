import Head from 'next/head'
import Layout from '../Components/Layout'

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

  return (
    <>
        <Head>
          <title>Premium workplace!</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta name="description" content="Online Writing, Get work Done, Get remote work done" />
          <meta name="keywords" content="Writing, Online work, Post Work, Assignments" />
          <link href="https://fonts.googleapis.com/css?family=Lato|Poppins&display=swap" rel="stylesheet"></link>
          {/**Creating the Paypal button */}
          <script src="https://www.paypal.com/sdk/js?client-id=AUVCbnFcI95tAmQQ8SBw7Aix7WDn2-56UVussHbxUIwyZ_WwXSoveCLybPflZUAsyJfepz_3SHWeDwCv&currency=CAD"></script>
        </Head>

        <Layout className="homepage"/>

    </> 
  )
}

export default Homepage;
