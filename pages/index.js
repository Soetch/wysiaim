import Socials from "../components/Socials"
import Ad from "../components/Ad"
import Link from "next/link"
import Header from "../components/Header"
import Members from "../components/Members"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>WYSIAim</title>
        <meta property="og:title" content="WYSIAim"/>
        <meta property="og:description" content="WYSIAim's Home"/>
        <meta property="og:type" content="website"/>
        <meta property="og:author" content="WYSIAim"/>
      </Head>
      <div className="">
        <Header/>
        <div id="body">
          <div className="box-border bg-zenith bg-cover w-150">
            
          </div>
          <Socials/>
          <Ad/>
          <Members/>
          
          <div className="box-border bg-blue-900 w-150 h-24">
                <div className="flex place-content-center">
                  <div className="mt-8 shadow-inner rounded-2xl bg-blue-800">
                  <div className="text-xl text-white mt-1 mb-1 ml-2 mr-2">
                       Made with 💕
                       <a> by </a>
                       <a href="https://soetch.vercel.app" className="hover:underline">Soetch</a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </> 
  )
}
