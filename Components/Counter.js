import React, {useState} from 'react'
import CounterStyles from '../styles/counter.module.css'
import dynamic from 'next/dynamic'

const Counter = () => {

	if(typeof window !== 'undefined'){
		const counters = document.querySelectorAll('.counter');
		const speed = 200; // The lower the slower
		
		counters.forEach(counter => {
			const updateCount = () => {
				const target = +counter.getAttribute('data-target');
				const count = +counter.innerText;
		
				// Lower inc to slow and higher to slow
				const inc = target / speed;
		
				// console.log(inc);
				// console.log(count);
		
				// Check if target is reached
				if (count < target) {
					// Add inc to count and output in counter
					counter.innerText = count + inc;
					// Call function every ms
					setTimeout(updateCount, 1);
				} else {
					counter.innerText = target;
				}
			};
		
			updateCount();
		});
		}
		else{
			console.log("Window object is just undefined");
		}

    return (
        <div className="flex flex-row space-x-5 text-xl">
        
			<h1>Important site metrics include:</h1>
		
		<section>
			<div className="flex flex-row space-x-5 border-2">
				<div>
					<i class="fab fa-youtube fa-4x"></i>
					<h3 className="bg-red-800">Years in Academic Writing</h3>
					<div class="counter" data-target="6">0</div>
				</div>
				<div>
					<i class="fab fa-twitter fa-4x"></i>
					<h3 className="bg-red-800">Writers Active</h3>
					<div class="counter" data-target="500">0</div>
				</div>
				<div>
					<i class="fab fa-facebook fa-4x"></i>
					<h3 className="bg-red-800">Orders Delivered</h3>
					<div class="counter" data-target="3000">0</div>
				</div>
				<div>
					<i class="fab fa-linkedin fa-4x"></i>
					<h3 className="bg-red-800">Quality Score</h3>
					<div class="counter" data-target="95">0</div>
				</div>
			</div>
		</section>
        </div>
    )
}

export default Counter