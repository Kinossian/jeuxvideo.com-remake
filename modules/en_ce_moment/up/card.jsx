import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CardUp = ({ href, image }) => {
    return (
        <Link href={href} className='group snap-start relative z-[1] min-w-full h-72 lg:h-80 lg:min-w-min lg:w-56 '>
            <Image
                className='w-full h-full object-cover object-center lg:rounded'
                src={image}
                alt="image"
                height={400}
                width={400}
            />
            <div className='absolute w-full h-24 left-0 bottom-0 bg-black opacity-30 blur-[10px] '></div>
            <div className='absolute bottom-0 w-full px-2 pb-12 lg:pb-4'>
                <h3 className='group-hover:text-gray-400 ease-out duration-200 mb-1 font-semibold text-gray-300 text-sm border border-dotted border-stone-100 border-opacity-20 p-0'>De ChatGPT à des outils de triche : les IA vont-elles tuer le jeu vidéo ?</h3>
                <div className='flex items-center text-xs text-gray-300'>
                    <p className='font-extralight text-[11px] min-w-fit'>Il y a 33 minutes</p>
                    <p className='icon-in-card'>5</p>
                    <p className='icon-in-card'>PC</p>
                    <p className='icon-in-card'>PC</p>
                </div>
            </div>
        </Link>
    );
};

export default CardUp;