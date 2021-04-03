
const Footer = () => {
    return (
	<div>
	  <footer class="bg-gray-800 text-gray-300 px-6 lg:px-8 py-12">
	    <div class="max-w-screen-xl mx-auto mb-12 lg:mb-16">
		{/*Add the logo img*/}
	    	<img src="" class="h-8" alt="logo" />
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
	    	<div class="flex items-baseline space-x-2">
	    	  <span>Coming soon</span><br />
	    		<img src="../../public/google-play-badge.png" class="h-8" alt="playstore-link" />
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
