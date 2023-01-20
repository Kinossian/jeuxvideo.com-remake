import { AiOutlineSearch } from 'react-icons/Ai';
import { BiUserCircle, BiMoon } from 'react-icons/Bi';

const SearchConectTheme = () => {
    return (
        <div className='flex items-center'>
            <AiOutlineSearch className='text-4xl mr-2 hover:bg-gray-700 rounded-full p-1 cursor-pointer' />
            <div className='flex items-center text-2xl mr-2 cursor-pointer rounded-full p-1 hover:bg-gray-700'>
                <BiUserCircle className='text-3xl mr-1' />
                <p className='text-sm font-medium'>CONNEXION</p>
            </div>
            <BiMoon className='text-3xl hover:bg-gray-700 rounded-full p-1 cursor-pointer' />
        </div>
    );
};

export default SearchConectTheme;