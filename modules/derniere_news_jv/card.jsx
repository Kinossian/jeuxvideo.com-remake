import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CardDerniereJV = () => {
    return (
        <Link href="/" className='group flex w-full h-20'>
            <Image
                className='w-20 h-20 object-cover rounded'
                src="https://image.jeuxvideo.com/medias-lg/167360/1673601192-9020-card.png"
                alt='photo'
                width={400}
                height={400}
            />
            <div className='flex flex-col justify-between ml-4 w-full'>
                <p className='text-blue-500 text-xs'>NEWS JEU</p>
                <h3 className='text-gray-200 group-hover:text-blue-500 text-sm'>Un développeur de Cyberpunk 2077 avoue que les critiques sont "justifiées</h3>
                <div className='flex items-center'>
                    <p className='text-zinc-400 text-xs mr-1'>Il y a 19 minutes</p>
                    <span className='text-blue-600 bg-zinc-900 border border-blue-500 rounded-full text-xs px-2'>5</span>
                </div>
            </div>
        </Link>
    );
};

export default CardDerniereJV;;