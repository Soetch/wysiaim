import Link from "next/link"
import Image from "next/image"

export default function Members() {
    return(
        <>
            <div className="bg-slate-200 box-border w-175 xl:h-200 sm:h-200">
                <div className="flex gap-4 place-content-center">
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="mt-4" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                        </svg>
                    </a>
                    <a className="mt-4 text-4xl font-bold">Members</a>
                </div>
                <br/>
                <div id="owner" className="">
                    <div className="flex place-content-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                        <a className="text-3xl font-bold">
                            Owner
                        </a>
                    </div>
                    <div className="flex place-content-center gap-1 w-150 h-24 mt-2">
                        <div className="mt-2 box-border shadow-xl bg-slate-300 rounded-xl w-96 flex gap-3">
                            <a className="bg-konroatori w-16 h-16 bg-cover mt-3 rounded-xl ml-4"/>
                            <a className="text-2xl font-bold mt-7 ml-3 mr-3">
                                stewie
                            </a>
                            <div className="flex gap-3">
                                <Link href="https://twitter.com/wysiquickpiece">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" viewBox="0 0 16 16" className="mt-6 hover:scale-110">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                    </svg>
                                </Link>
                                <Link href="https://www.youtube.com/channel/UCRclnIUNqkf06ju0-zH6fow/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" className="mt-6 hover:scale-110" viewBox="0 0 16 16">
                                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/> 
                                    </svg>
                                </Link>
                                <Link href="https://www.tiktok.com/@wysiaimofficial">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="mt-6 hover:scale-110" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07z"/></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="admin" className="mt-4">
                    <div className="flex place-content-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-10 h-10 mr-1" viewBox="0 0 16 16" strokeWidth="2">
                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                            <path fillRule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                        </svg>
                        <a className="text-3xl font-bold">
                            Admin
                        </a>
                    </div>
                    <div className="flex place-content-center gap-1 w-150 h-24 mt-2">
                        <div className="mt-2 box-border shadow-xl bg-slate-300 rounded-xl w-96 flex gap-3">
                            <a className="bg-blueyjay w-16 h-16 bg-cover mt-3 rounded-xl ml-4"/>
                            <a className="text-2xl font-bold mt-7 ml-3 mr-3">
                                BlueyJay
                            </a>
                            <div className="flex gap-3 mt-1">
                                <Link href="https://www.youtube.com/channel/UCRclnIUNqkf06ju0-zH6fow/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" className="mt-6 hover:scale-110" viewBox="0 0 16 16">
                                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/> 
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div> 

                <div id="members" className="mt-4">
                    <div className="flex place-content-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-10 w-10" viewBox="0 0 16 16">
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                        </svg>
                        <a className="text-3xl font-bold">
                            Members
                        </a>
                    </div>
                    <div className="lg:flex place-content-center gap-4 mt-2">
                        <div className="flex place-content-center gap-1 w-150 h-24 mt-2">
                            <div className="mt-2 box-border shadow-xl bg-slate-300 rounded-xl w-96 flex gap-3">
                                <a className="bg-mariodidthat w-16 h-16 bg-cover mt-3 rounded-xl ml-4"/>
                                <a className="text-2xl font-bold mt-7 ml-3 mr-4">
                                    GzBugy
                                </a>
                                <div className="flex gap-3 mt-1">
                                    <Link href="https://twitter.com/GzBugy">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" viewBox="0 0 16 16" className="mt-6 hover:scale-110">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                        </svg>
                                    </Link>
                                    <Link href="https://www.youtube.com/channel/UCUHswLI5MGuGDDDoRcYmS8A">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" className="mt-6 hover:scale-110" viewBox="0 0 16 16">
                                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/> 
                                        </svg>
                                    </Link>
                                    <Link href="https://www.twitch.tv/gzbugy">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-10 h-10 mt-6 hover:scale-110 " viewBox="0 0 16 16">
                                            <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"/>
                                            <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex place-content-center gap-1 w-150 h-24 mt-2">
                            <div className="mt-2 box-border shadow-xl bg-slate-300 rounded-xl w-96 flex gap-3">
                                <a className="bg-intervalent w-16 h-16 bg-cover mt-3 rounded-xl ml-4"/>
                                <a className="text-2xl font-bold mt-7 ml-3 mr-3">
                                    intervalent
                                </a>
                                <div className="flex gap-3 mt-1">
                                    <Link href="https://twitter.com/intervalentosu">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" viewBox="0 0 16 16" className="mt-6 hover:scale-110">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                        </svg>
                                    </Link>
                                    <Link href="https://www.youtube.com/channel/UCVekIsW3g0kGKL3aKy6b6ng">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" className="mt-6 hover:scale-110" viewBox="0 0 16 16">
                                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/> 
                                        </svg>
                                    </Link>
                                    <Link href="https://www.tiktok.com/@intervalent">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="mt-6 hover:scale-110" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07z"/></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex place-content-center gap-1 w-150 h-24 mt-2">
                            <div className="mt-2 box-border shadow-xl bg-slate-300 rounded-xl w-96 flex gap-3">
                                <a className="bg-relaxingastro w-16 h-16 bg-cover mt-3 rounded-xl ml-4"/>
                                <a className="text-xl font-bold mt-8 ml-1 mr-1">
                                    relaxingastro
                                </a>
                                <div className="flex gap-3 mt-1">
                                    <Link href="https://twitter.com/relaxingastro">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" viewBox="0 0 16 16" className="mt-6 hover:scale-110">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                        </svg>
                                    </Link>
                                    <Link href="https://www.youtube.com/channel/UCJ_hUoLR4EuW-mEBIYJnkOg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" className="mt-6 hover:scale-110" viewBox="0 0 16 16">
                                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/> 
                                        </svg>
                                    </Link>
                                    <Link href="https://www.twitch.tv/relaxingastro">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-10 h-10 mt-6 hover:scale-110" viewBox="0 0 16 16">
                                            <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"/>
                                            <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex place-content-center gap-4 mt-2">
                        <div className="flex place-content-center gap-1 w-150 h-24 mt-2">
                            <div className="mt-2 box-border shadow-xl bg-slate-300 rounded-xl w-96 flex gap-3">
                                <a className="bg-sikkr w-16 h-16 bg-cover mt-3 rounded-xl ml-4"/>
                                <a className="text-2xl font-bold mt-7 ml-3 mr-3">
                                    sikkr
                                </a>
                                <div className="flex gap-3 mt-1">
                                    <Link href="https://twitter.com/sikkrosu">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" viewBox="0 0 16 16" className="mt-6 hover:scale-110">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                        </svg>
                                    </Link>
                                    <Link href="https://www.twitch.tv/sikkr_">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-10 h-10 mt-6 hover:scale-110" viewBox="0 0 16 16">
                                            <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"/>
                                            <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex place-content-center gap-1 w-150 h-24 mt-2">
                            <div className="mt-2 box-border shadow-xl bg-slate-300 rounded-xl w-96 flex gap-3">
                                <a className="bg-pea w-16 h-16 bg-cover mt-3 rounded-xl ml-4"/>
                                <a className="text-2xl font-bold mt-7 ml-3 mr-3">
                                    pea
                                </a>
                                <div className="flex gap-3 mt-1">
                                <Link href="https://twitter.com/ohhhpea">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" viewBox="0 0 16 16" className="mt-6 hover:scale-110">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                    </svg>
                                </Link>
                                <Link href="https://www.youtube.com/channel/UCwrtujvYe8k0ew6jHZCRBrQ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" className="mt-6 hover:scale-110" viewBox="0 0 16 16">
                                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/> 
                                    </svg>
                                </Link>
                                <Link href="https://www.tiktok.com/@ohhpea">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="mt-6 hover:scale-110" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07z"/></svg>
                                </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex place-content-center gap-1 w-150 h-24 mt-2">
                            <div className="mt-2 box-border shadow-xl bg-slate-300 rounded-xl w-96 flex gap-3">
                                <a className="bg-sakamata w-16 h-16 bg-cover mt-3 rounded-xl ml-4"/>
                                <a className="text-2xl font-bold mt-7 ml-3 mr-3">
                                    Sakamata727
                                </a>
                                <div className="flex gap-3 mt-1">
                                <Link href="https://twitter.com/TheSakamata727">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" viewBox="0 0 16 16" className="mt-6 hover:scale-110">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                    </svg>
                                </Link>
                                <Link href="https://www.youtube.com/channel/UCXTBCKKW_vSsCDzOv24Ey3Q">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" className="mt-6 hover:scale-110" viewBox="0 0 16 16">
                                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/> 
                                    </svg>
                                </Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="lg:flex place-content-center gap-4 mt-2">
                    <div className="flex place-content-center gap-1 w-150 h-24 mt-2">
                            <div className="mt-2 box-border shadow-xl bg-slate-300 rounded-xl w-96 flex gap-3">
                                <a className="bg-runnysunny w-16 h-16 bg-cover mt-3 rounded-xl ml-4"/>
                                <a className="text-2xl font-bold mt-7 ml-3 mr-3">
                                    runnysunny
                                </a>
                                <div className="flex gap-3 mt-1">
                                    <Link href="https://twitter.com/RunnyYt">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" viewBox="0 0 16 16" className="mt-6 hover:scale-110">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                        </svg>
                                    </Link>
                                    <Link href="https://www.twitch.tv/runnyfcunny">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-10 h-10 mt-6 hover:scale-110" viewBox="0 0 16 16">
                                            <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"/>
                                            <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex place-content-center gap-1 w-150 h-24 mt-2">
                            <div className="mt-2 box-border shadow-xl bg-slate-300 rounded-xl w-96 flex gap-3">
                                <a className="bg-justcallmemk w-16 h-16 bg-cover mt-3 rounded-xl ml-4"/>
                                <a className="text-lg font-bold mt-8 ml-1 mr-1">
                                    JustCallMeMK
                                </a>
                                <div className="flex gap-3 mt-1">
                                <Link href="https://twitter.com/JustcallmemkO">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" viewBox="0 0 16 16" className="mt-6 hover:scale-110">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                    </svg>
                                </Link>
                                <Link href="https://www.youtube.com/channel/UCAWL088R9HEqIceAshk5m0g">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" className="mt-6 hover:scale-110" viewBox="0 0 16 16">
                                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/> 
                                    </svg>
                                </Link>
                                <Link href="https://www.twitch.tv/justcallmemk__">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-10 h-10 mt-6 hover:scale-110" viewBox="0 0 16 16">
                                            <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"/>
                                            <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"/>
                                        </svg>
                                </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex place-content-center gap-1 w-150 h-24 mt-2">
                            <div className="mt-2 box-border shadow-xl bg-slate-300 rounded-xl w-96 flex gap-3">
                                <a className="bg-sagun w-16 h-16 bg-cover mt-3 rounded-xl ml-4"/>
                                <a className="text-2xl font-bold mt-7 ml-3 mr-3">
                                    sagun
                                </a>
                                <div className="flex gap-3 mt-1">
                                <Link href="https://twitter.com/sagun_twit/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" viewBox="0 0 16 16" className="mt-6 hover:scale-110">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                    </svg>
                                </Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="lg:flex place-content-center gap-4 mt-2">
                    <div className="flex place-content-center gap-1 w-150 h-24 mt-2">
                            <div className="mt-2 box-border shadow-xl bg-slate-300 rounded-xl w-96 flex gap-3">
                                <a className="bg-spyke w-16 h-16 bg-cover mt-3 rounded-xl ml-4"/>
                                <a className="text-2xl font-bold mt-7 ml-3 mr-3">
                                    Spyke
                                </a>
                                <div className="flex gap-3 mt-1">
                                    <Link href="https://twitter.com/SpykeSquirt">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" viewBox="0 0 16 16" className="mt-6 hover:scale-110">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                        </svg>
                                    </Link>
                                    <Link href="https://www.twitch.tv/spykesquirt">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-10 h-10 mt-6 hover:scale-110" viewBox="0 0 16 16">
                                            <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"/>
                                            <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex place-content-center gap-1 w-150 h-24 mt-2">
                            <div className="mt-2 box-border shadow-xl bg-slate-300 rounded-xl w-96 flex gap-3">
                                <a className="bg-enderlegend w-16 h-16 bg-cover mt-3 rounded-xl ml-4"/>
                                <a className="text-lg font-bold mt-8 ml-3 mr-3">
                                    Enderlegend87
                                </a>
                                <div className="flex gap-3 mt-1">
                                <Link href="https://twitter.com/enderlegend87">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" viewBox="0 0 16 16" className="mt-6 hover:scale-110">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                    </svg>
                                </Link>
                                <Link href="hhttps://www.youtube.com/channel/UCt4e3IlP9YuBeFGL41tPjcw">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" className="mt-6 hover:scale-110" viewBox="0 0 16 16">
                                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/> 
                                    </svg>
                                </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex place-content-center gap-1 w-150 h-24 mt-2">
                            <div className="mt-2 box-border shadow-xl bg-slate-300 rounded-xl w-96 flex gap-3">
                                <a className="bg-fainted w-16 h-16 bg-cover mt-3 rounded-xl ml-4"/>
                                <a className="text-2xl font-bold mt-7 ml-3 mr-3">
                                    fainted
                                </a>
                                <div className="flex gap-3 mt-1">
                                <Link href="https://twitter.com/mr_fgchamp">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" viewBox="0 0 16 16" className="mt-6 hover:scale-110">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                    </svg>
                                </Link>
                                <Link href="https://www.youtube.com/channel/UCke1O0REd9JlFBMF2dOndLg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" className="mt-6 hover:scale-110" viewBox="0 0 16 16">
                                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/> 
                                    </svg>
                                </Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="lg:flex place-content-center gap-4 mt-2">
                    <div className="flex place-content-center gap-1 w-150 h-24 mt-2">
                            <div className="mt-2 box-border shadow-xl bg-slate-300 rounded-xl w-96 flex gap-3">
                                <a className="bg-adomeium w-16 h-16 bg-cover mt-3 rounded-xl ml-4"/>
                                <a className="text-2xl font-bold mt-7 ml-3 mr-3">
                                    Adomeium
                                </a>
                                <div className="flex gap-3 mt-1">
                                    <Link href="https://twitter.com/adomeium_osu">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" viewBox="0 0 16 16" className="mt-6 hover:scale-110">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                        </svg>
                                    </Link>
                                    <Link href="hhttps://www.twitch.tv/adomeium003">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-10 h-10 mt-6 hover:scale-110" viewBox="0 0 16 16">
                                            <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"/>
                                            <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex place-content-center gap-1 w-150 h-24 mt-2">
                            <div className="mt-2 box-border shadow-xl bg-slate-300 rounded-xl w-96 flex gap-3">
                                <a className="bg-arminfh w-16 h-16 bg-cover mt-3 rounded-xl ml-4"/>
                                <a className="text-2xl font-bold mt-7 ml-3 mr-3">
                                    ArminFH
                                </a>
                                <div className="flex gap-3 mt-1">
                                <Link href="https://twitter.com/FloatingThroug8">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" viewBox="0 0 16 16" className="mt-6 hover:scale-110">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                    </svg>
                                </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex place-content-center gap-1 w-150 h-24 mt-2">
                            <div className="mt-2 box-border shadow-xl bg-slate-300 rounded-xl w-96 flex gap-3">
                                <a className="bg-shimii w-16 h-16 bg-cover mt-3 rounded-xl ml-4"/>
                                <a className="text-2xl font-bold mt-7 ml-3 mr-3">
                                    Shimii
                                </a>
                                <div className="flex gap-3 mt-1">
                                <Link href="https://twitter.com/Shimiiosu">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" viewBox="0 0 16 16" className="mt-6 hover:scale-110">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                    </svg>
                                </Link>
                                <Link href="https://www.twitch.tv/shimlives">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" className="mt-6 hover:scale-110" viewBox="0 0 16 16">
                                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/> 
                                    </svg>
                                </Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}