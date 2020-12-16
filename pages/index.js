import Head from 'next/head'

import Data from '../json/svg'

export default function Home() {
  return (
    <>
      <main>
        <nav>
          <div className="container mx-auto h-20 flex items-center justify-between px-8">
            <a href="#" className="relative pb-1 px-2 text-indigo-700">
              <span className="w-full h-full bg-indigo-100 absolute left-0 z-0 transform -skew-y-3" />
              <span className="text-xl font-bold relative">svg</span><span className="text-xl relative">mule</span>
            </a>
            <span>Free to use SVG Graphics</span>
          </div>
        </nav>
        <section className="container mx-auto">
          <div className="grid grid-cols-4 gap-4 px-8 pb-8">
            {
              Data.map((item, index) => (
                <article key={index} className="bg-white rounded shadow-sm">
                  <section className="h-64 p-6 flex">
                    <img src={"./svg/" + item.file + ".svg"} className="w-1/2 m-auto" />
                  </section>
                  <section className="p-6">
                    <a href={"./svg/" + item.file + ".svg"} download={"./svg/" + item.file + ".svg"} className="p-2 rounded inline-block w-full text-center bg-gray-100 hover:bg-gray-200">Download</a>
                  </section>
                </article>
              ))
            }
          </div>
        </section>
      </main>
    </>
  )
}
