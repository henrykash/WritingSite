import React from "react";
import Image from "next/image";
import TypingComponent from "../../Components/typing/Typing";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-header-image">
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Get Work Done <TypingComponent />
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div class="flex justify-center">
              <Link href='/ordernow'>
              <button class="inline-flex text-white bg-red-900 border-0 py-2 px-6 focus:outline-none hover:underline rounded text-lg">Order Now</button>
              </Link>

              <Link href="/howitworks">
              <button id="howitworks" class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:underline rounded text-lg">How it Works</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-red-100"/>
    </div>
  );
}

export default Header
