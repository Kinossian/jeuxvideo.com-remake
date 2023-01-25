import { BsArrowRight } from 'react-icons/bs';
import React from 'react';

const HeaderDerniereNews = () => {
    return (
        <div className='flex justify-between pt-8 pb-4'>
            <h3 className='flex items-center text-xl font-semibold text-gray-200'>
                DERNIERE NEWS JV
                <BsArrowRight className="ml-2" />
            </h3>
            <p className='text-orange-600 text-sm font-bold flex items-center'>News JV
                <BsArrowRight className="ml-2" />
            </p>
        </div>
    );
};

export default HeaderDerniereNews;