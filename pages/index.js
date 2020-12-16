import Head from 'next/head'

import Data from '../json/svg'

export default function Home() {
  return (
    <>
      <span className="header-bg" />
      <span className="header-gradient" />
      <nav>
        <div className="container mx-auto h-20 flex items-center justify-between px-8">
          <a href="#" className="relative pb-1 px-2 text-indigo-700">
            <span className="w-full h-full bg-white shadow-xl absolute left-0 z-0 transform -skew-y-3" />
            <span className="text-xl font-bold relative">svg</span><span className="text-xl relative">mule</span>
          </a>
          <div className="relative py-1 px-2 bg-indigo-900 bg-opacity-25 text-white">
            Free to use SVG Graphics
          </div>
        </div>
      </nav>
      <section className="container mx-auto">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 px-8 pb-8">
          {
            Data.map((item, index) => (
              <article key={index} className="bg-white rounded shadow-sm overflow-hidden">
                <section className="h-64 p-6 flex">
                  <img src={"./svg/" + item.file + ".svg"} className="w-2/3 h-2/3 m-auto" />
                </section>
                <section className="grid grid-cols-2 gap-px bg-gray-100 border-t border-gray-100 text-center">
                  <a href={"./svg/" + item.file + ".svg"} download={"./svg/" + item.file + ".svg"} className="group bg-white py-4 hover:text-indigo-600">
                    <svg className="m-auto w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140">
                      <g fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M70.006 72.917v-70M46.672 49.583l23.334 23.334 23.333-23.334M134.167 119.583a17.5 17.5 0 01-17.5 17.5H23.333a17.5 17.5 0 010-35h93.334a17.5 17.5 0 0117.5 17.5zM23.333 119.583h35" stroke-width="5.83333"/>
                        <path d="M99.167 119.583a5.833 5.833 0 1011.666 0 5.833 5.833 0 10-11.666 0zM32.44 49.583a11.667 11.667 0 00-11.317 8.838l-13.23 52.92M132.107 111.347l-13.23-52.926a11.667 11.667 0 00-11.316-8.838" stroke-width="5.83333"/>
                      </g>
                    </svg>
                  </a>
                  <a href={"./svg/" + item.file + ".svg"} target="_blank" className="bg-white py-4 hover:text-indigo-600">
                    <svg className="m-auto w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140">
                      <g fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M137.083 70S107.053 107.917 70 107.917 2.917 70 2.917 70 32.947 32.083 70 32.083 137.083 70 137.083 70z" stroke-width="5.83333"/>
                        <path d="M46.667 70a23.333 23.333 0 1046.666 0 23.333 23.333 0 10-46.666 0zM70 58.333A11.667 11.667 0 1158.333 70" stroke-width="5.83333"/>
                      </g>
                    </svg>
                  </a>
                </section>
              </article>
            ))
          }
        </div>
      </section>
    </>
  )
}
