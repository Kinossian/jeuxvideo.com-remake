import DropDownMenu from './drop_down_menu';
import { actus, forums, hightech, jeux, soldes, vidéo } from './db';
import { GoTriangleDown } from 'react-icons/go';
import Link from 'next/link';

const NavBar1 = ({ isNav }) => {
    return (
        <ul className={`
        z-[100]
        absolute lg:relative
        top-14 left-0 lg:top-0
        bg-zinc-900
        lg:w-full h-[270px] lg:h-full w-60
        flex-col lg:items-center items-start text-sm justify-start
        lg:flex lg:flex-row
            ${isNav ? "flex" : "hidden"}
        `} >
            <li className='group li-nav-1 '>
                <h2 className='title-menu w-full justify-between'>
                    <Link href="/">JEUX</Link>
                    <GoTriangleDown className='text-blue-400 ml-1 rotate-[273deg] lg:rotate-0' />
                </h2>
                <ul className='sous-menu-container'>
                    {
                        jeux.map((obj, index) => (
                            <DropDownMenu key={index} obj={obj} />
                        ))
                    }
                </ul>
            </li>
            <li className='group li-nav-1 '>
                <h2 className='title-menu w-full justify-between'>
                    <Link href="/">ACTUS</Link>
                    <GoTriangleDown className='text-blue-400 ml-1 rotate-[273deg] lg:rotate-0' />
                </h2>
                <ul className='sous-menu-container'>
                    {
                        actus.map((obj, index) => (
                            <DropDownMenu key={index} obj={obj} />
                        ))
                    }
                </ul>
            </li>
            <li className='group li-nav-1 '>
                <h2 className='title-menu w-full  justify-between'>
                    <Link href="/">SOLDES</Link>
                    <GoTriangleDown className='text-blue-400 ml-1 rotate-[273deg] lg:rotate-0' />
                </h2>
                <ul className='sous-menu-container'>
                    {
                        soldes.map((obj, index) => (
                            <DropDownMenu key={index} obj={obj} />
                        ))
                    }
                </ul>
            </li>
            <li className='group li-nav-1 '>
                <h2 className='title-menu w-full justify-between'>
                    <Link href="/">HIGH-TECH</Link>
                    <GoTriangleDown className='text-blue-400 ml-1 rotate-[273deg] lg:rotate-0' />
                </h2>
                <ul className='sous-menu-container'>
                    {
                        hightech.map((obj, index) => (
                            <DropDownMenu key={index} obj={obj} />
                        ))
                    }
                </ul>
            </li>
            <li className='group li-nav-1 '>
                <h2 className='title-menu w-full justify-between'>
                    <Link href="/">VIDEOS</Link>
                    <GoTriangleDown className='text-blue-400 ml-1 rotate-[273deg] lg:rotate-0' />
                </h2>
                <ul className='sous-menu-container'>
                    {
                        vidéo.map((obj, index) => (
                            <DropDownMenu key={index} obj={obj} />
                        ))
                    }
                </ul>
            </li>
            <li>
                <h2 className='title-menu'>
                    <Link href="/">SAMSUNG</Link>
                </h2>
            </li>
            <li className='group li-nav-1 lg:border-none border-b-2 border-zinc-800 pb-3 lg:pb-0'>
                <h2 className='title-menu w-full  justify-between'>
                    <Link href="/">FORUMS</Link>
                    <GoTriangleDown className='text-blue-400 ml-1 rotate-[273deg] lg:rotate-0' />
                </h2>
                <ul className='sous-menu-container'>
                    {
                        forums.map((obj, index) => (
                            <DropDownMenu key={index} obj={obj} />
                        ))
                    }
                </ul>
            </li>
        </ul>
    );
};

export default NavBar1;