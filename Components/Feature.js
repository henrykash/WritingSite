//Feature section of the homepage
const { default: TypingComponent } = require("./typing/Typing")

const Features = () => {
  return (
    <div class="bg-gray">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h1 className="sticky top-0 max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Our Features
          </h1>
        </div>
        <div className="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3">
          <div className="flex flex-col sm:flex-row">
            <div className="sm:mr-4">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                Plagiarism-Free papers
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                We strive to offer you papers that are free of
              </p>
              <ul className="mb-4 -ml-1 space-y-2">
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Plagiarism
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Well strucure
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Grammatical papers
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="sm:mr-4">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">Quality services</h6>
              <p className="mb-3 text-sm text-gray-900">
                We strive to help our clients have the best experience  
              </p>
              <ul className="mb-4 -ml-1 space-y-2">
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Quick Delivery
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Professionally done 
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Up-to standard
                </li>
              </ul>
              
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="sm:mr-4">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">Online Support</h6>
              <p className="mb-3 text-sm text-gray-900">
                We have a 24/7 customer support to guide you   
              </p>
              <ul className="mb-4 -ml-1 space-y-2">
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Customer support
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Assistance 
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Help you make an order
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </div>
      <hr className="border-red-100"/>
    </div>
  );
};

export default Features;
