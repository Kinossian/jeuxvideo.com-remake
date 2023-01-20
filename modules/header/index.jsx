import Link from 'next/link';
import Image from 'next/image';
import NavBar1 from './up/nav_bar_1';
import SearchConectTheme from './up/search_conect_theme';
import NavBar2 from './down/nav_bar_2';
import { useState } from 'react';


const Header = () => {
    const [isNav, setIsNav] = useState(false);
    return (
        <header>
            <div className='bg-zinc-900  text-gray-100  '>
                <nav className=' flex items-center justify-between max-w-screen-lg mx-auto text-gray-100 h-14'>
                    <div className='flex'>
                        <button onClick={() => setIsNav(!isNav)} className='lg:hidden'>burger</button>
                        <Link href="/" className='h-full flex items-center'>
                            <Image className='h-9 w-auto '
                                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhbHF1ZV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNTk0LjIgNDMwLjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU5NC4yIDQzMC44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwNjFFRTt9Cgkuc3Qxe29wYWNpdHk6MC41O30KCS5zdDJ7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9Cgkuc3Qze2ZpbGw6I0ZGM0MwMDt9Cjwvc3R5bGU+CjxnPgoJPGcgaWQ9IkNhbHF1ZV8yXzFfIj4KCQk8ZyBpZD0iQ2FscXVlXzEtMiI+CgkJCTxnPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMzU5LjRMNzUuNiwyODhjMjAuNiwyNC44LDM5LjksMzkuMyw2Ni42LDM5LjNjMjkuMSwwLDQ3LjgtMjAsNDcuOC01OS4zVjBoMTE2Ljh2MjY4LjcKCQkJCQljMCw1My4yLTEzLjMsOTAuOC00MS44LDExOS4yYy0yNy44LDI3LjgtNjcuOCw0My0xMTYuMiw0M0M3NSw0MzAuOCwzMC4yLDQwMCwwLDM1OS40eiIvPgoJCQk8L2c+CgkJCTxnIGNsYXNzPSJzdDEiPgoKCQkJCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjE1MS4xMzQiIHkxPSIyMDMuODg4NyIgeDI9IjI3MC4wMzQiIHkyPSIyNDYuMTY4NyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDQzMikiPgoJCQkJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkY7c3RvcC1vcGFjaXR5OjAiLz4KCQkJCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMDAwMDAwIi8+CgkJCQk8L2xpbmVhckdyYWRpZW50PgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTAsMzU5LjRMNzUuNiwyODhjMjAuNiwyNC44LDM5LjksMzkuMyw2Ni42LDM5LjNjMjkuMSwwLDQ3LjgtMjAsNDcuOC01OS4zVjBoMTE2Ljh2MjY4LjcKCQkJCQljMCw1My4yLTEzLjMsOTAuOC00MS44LDExOS4yYy0yNy44LDI3LjgtNjcuOCw0My0xMTYuMiw0M0M3NSw0MzAuOCwzMC4yLDQwMCwwLDM1OS40eiIvPgoJCQk8L2c+CgkJCTxwb2x5Z29uIGNsYXNzPSJzdDMiIHBvaW50cz0iNDc3LjQsMCAzOTIuMSwyNjcuMSAzMDYuOCwwIDE5MCwwIDM0Mi4xLDQyNSA0NDIsNDI1IDU5NC4yLDAgCQkJIi8+CgkJPC9nPgoJPC9nPgo8L2c+Cjwvc3ZnPgo="
                                width={400}
                                height={400}
                            />
                        </Link>
                    </div>
                    <NavBar1 isNav={isNav} />
                    <SearchConectTheme />
                </nav >
                <div className='lg:bg-black lg:relative lg:bottom-auto absolute bottom-44 '>
                    <nav className={`
                    items-center max-w-screen-lg mx-auto h-10
                    ${isNav ? "flex" : "hidden"} lg:flex
                    `}>
                        <NavBar2 />
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;