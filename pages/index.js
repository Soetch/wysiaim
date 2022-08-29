import Socials from "../components/Socials"
import Ad from "../components/Ad"
import Link from "next/link"
import Header from "../components/Header"
import Members from "../components/Members"

export default function Home() {
  return (
    <>
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
