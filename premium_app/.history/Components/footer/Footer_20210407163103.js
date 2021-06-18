import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return ( 
	<div>
	  <footer class="bg-black text-gray-300 px-6 lg:px-8 py-12">
	    <div class="max-w-screen-xl mx-auto mb-12 lg:mb-16">
		<Link href="/">
            <Image
                class="m-8"
                src="/writing.png"
                alt="Premium logo"
                width={150}
                height={110}
                />
		</Link>
	    </div>
	    <div class="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-8">
		<div>
		   <h5 class="text-xl font-semibold text-white">Product</h5>
	    	   <nav class="mt-4">
		      <ul class="space-y-2">
			<li><a href="#" class="font-normal text-base hover:text-gray">LandingPages</a></li>
	    		<li><a href="#" class="font-normal text-base hover:text-gray">Features</a></li>
	    		<li><a href="#" class="font-normal text-base hover:text-gray">Features</a></li>
	    	      </ul>
	    	   </nav>
	        </div>
	        <div>
	     	  <h5 class="text-xl font-semibold text-white">Industries</h5> 
	        </div>
	    	<div>
		   <h5 class="text-xl font-semibold text-white">About us</h5>
	    	   <nav class="mt-4">
	        	<ul class="space-y-2">
	    		   <li><a href="#" class="font-normal text-base hover:text-gray-100">What we do</a></li>
	    		   <li><a href="#" class="font-normal text-base hover:text-gray-100">CEO</a></li>
	    		   <li><a href="#" class="font-normal text-base hover:text-gray-100">Company</a></li>
	    		</ul>
	           </nav>		
	       </div>
	    	<div>
		   <h5 class="text-xl font-semibold text-white">Legal</h5>
		    <nav class="mt-4">
			<ul class="space-y-2">
			   <li><a href="#" class="font-normal text-base hover:text-gray-100">Terms and conditions </a></li>
	    		   <li><a href="#" class="font-normal text-base hover:text-gray-100">policy</a></li>
	    		   <li><a href="#" class="font-normal text-base hover:text-gray-100">privacy</a></li>
	    		</ul>
	    	    </nav>
	      </div>
	    </div>
	    <div class="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 mt-16 lg:mt-20 border-t-2 border-gray-700 pt-8">
		<div class="text-sm space-y-4 md:space-y-1 text-center md:text-left">
	    	  <p>&copy;2021. All Rights Reserved | <a href="#">GetWorkDone</a></p>
	    	</div>
	    	<div class="flex items-baseline grid grid-rows-2">
	    	  <span>Coming soon</span><br />
			  <div className="flex space-x-4">
			  	<Link href="/">
            		<Image
                		class="m-8"
                		src="/playstore-icon.png"
                		alt="Playstore icon"
                		width={70}
                		height={70}
                	/>
				</Link>
				<Link href="/">
            		<Image
                		class="m-8"
                		src="/appstore.jpeg"
                		alt="Playstore icon"
                		width={70}
                		height={70}
                	/>
				</Link>
			  </div>
	    	</div>
	    </div>
	    <div class="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 mt-8 lg:mt-12">
	    <nav class="flex flex-wrap justify-center space-x-6">
	    	<a href="#" class="font-normal text-sm hover:text-gray-100 mb-2">Privacy</a>
	    	<a href="#" class="font-normal text-sm hover:text-gray-100 mb-2">Terms</a>
	    	<a href="#" class="font-normal text-sm hover:text-gray-100 mb-2">Notice</a> 
	    	<a href="#" class="font-normal text-sm hover:text-gray-100 mb-2">Legal</a>
	    </nav>
	    </div>
	  </footer>
	</div>
	    
    )
}

export default Footer
