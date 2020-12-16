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
              <article key={index} className="bg-white bg-opacity-90 rounded shadow-sm overflow-hidden" style={{backdropFilter: "blur(15px)"}}>
                <section className="h-64 p-6 flex">
                  <img src={"./svg/" + item.file + ".svg"} className="w-2/3 h-2/3 m-auto" />
                </section>
                <section className="grid grid-cols-2 gap-px bg-gray-100 border-t border-gray-100 text-center">
                  <a href={"./svg/" + item.file + ".svg"} download={"./svg/" + item.file + ".svg"} className="bg-white p-4 hover:text-indigo-600">
                    Download
                  </a>
                  <a href={"./svg/" + item.file + ".svg"} target="_blank" className="bg-white p-4 hover:text-indigo-600">
                    View
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
