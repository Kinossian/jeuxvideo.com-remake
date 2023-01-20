import Link from 'next/link';
import { BsArrowRight } from 'react-icons/Bs';


const DropDownMenu = ({ obj }) => {
    return (
        <li className='flex w-52 justify-between items-center hover:bg-gray-700'>
            <Link className={`
            w-full h-full
            px-4 py-4
            ${obj.last ? "font-bold" : "font-light"}
            ${obj.last && "text-blue-400"}
            `}
                href={obj.link}>{obj.name}
            </Link>
            {obj.last && <BsArrowRight className='text-blue-400 mr-4 text-2xl' />}
        </li>
    );
};

export default DropDownMenu;