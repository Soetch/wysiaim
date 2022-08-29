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
        <meta charset="UTF-8"/>
        <meta name="description" content="WYSIAim's Home"/>
        <meta name="keywords" content="WYSIAim, osu!, taiko, mania, catch"/>
        <meta name="author" content="WYSIAim"/>
      </Head>
      <div className="">
        <Header/>
        <div id="body">
          <div className="box-border bg-zenith bg-cover w-150 h-96">
            
          </div>
          <Socials/>
          <Ad/>
          <Members/>
        </div>
      </div>
    </> 
  )
}
