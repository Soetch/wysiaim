import Link from "next/link";

export default function Ad({children}) {
    return(
        <>
            <div className="box-border bg-yellow-500 w-150 h-24">
                <div className="flex place-content-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="mt-6" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        <path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                    </svg>
                    <div className="flex gap-2">
                        <div className="mt-8 text-xl font-bold">
                            We&apos;re looking for new members !
                        </div>
                        <div className="mt-8 text-xl font-bold hover:underline">
                            <Link href="https://forms.gle/UoT3J8DjzYqdteeh7">Click here to send a submission!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}