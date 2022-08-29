import Link from "next/link"

export default function Header({children}) {
    return(
        <>
            <div id="header" className="flex box-border bg-blue-200 shadow-xl w-150 h-24 place-content-center">
                <Link href="#">
                    <div className="flex">
                        <div className="bg-logo bg-cover h-16 w-16 rounded-2xl mt-4 ml-4 shadow-xl"/>
                        <div className="mt-8 ml-4 text-2xl font-bold">WYSIAim</div>
                    </div>
                </Link>
            </div>
        </>
    )
}