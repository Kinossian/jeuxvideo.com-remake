import Link from "next/link";
import { BsArrowRight } from 'react-icons/Bs';


const NavBar2 = () => {
    return (
        <ul className="lg:flex lg:w-full">
            <li className="nav-bar-2">
                <Link href="">PC</Link>
            </li>
            <li className="nav-bar-2">
                <Link href="">PS5</Link>
            </li>
            <li className="nav-bar-2">
                <Link href="">Xbox Series</Link>
            </li>
            <li className="nav-bar-2">
                <Link href="">PS4</Link>
            </li>
            <li className="nav-bar-2">
                <Link href="">One</Link>
            </li>
            <li className="nav-bar-2">
                <Link href="">Switch</Link>
            </li>
            <li className="nav-bar-2">
                <Link href="">Wii U</Link>
            </li>
            <li className="nav-bar-2">
                <Link href="">iOS</Link>
            </li>
            <li className="nav-bar-2">
                <Link href="">Android</Link>
            </li>
            <li className="nav-bar-2">
                <Link href="">MMO</Link>
            </li>
            <li className="nav-bar-2">
                <Link href="">RPG</Link>
            </li>
            <li className="nav-bar-2">
                <Link href="">FPS</Link>
            </li>
            <li className="flex items-center text-sm px-2 rounded ml-2 bg-sky-600">
                <Link className="flex items-center" href="">Les nouveautés du PS PLUS <BsArrowRight className="ml-2" /></Link>
            </li>
        </ul >
    );
};

export default NavBar2;