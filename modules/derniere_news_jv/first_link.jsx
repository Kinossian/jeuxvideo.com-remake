import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FirstLink = ({ href }) => {
    return (
        <Link href={href} className='group flex relative z-[1] min-w-full h-72 lg:h-68  lg:w-56 '>
            <Image
                className='w-full h-full object-cover object-center lg:rounded'
                src="https://image.jeuxvideo.com/medias-lg/167360/1673601192-9020-card.png"
                alt="image"
                height={400}
                width={400}
            />
            <div className='absolute w-full h-24 left-0 bottom-0 bg-black opacity-30 blur-[10px] '></div>
            <div className='absolute top-20 w-1/2 px-2 pb-12 lg:pb-4'>
                <h3 className='group-hover:text-gray-400 ease-out duration-200 mb-1 font-semibold text-gray-100 text-xl border border-dotted border-stone-100 border-opacity-20 p-0'>De ChatGPT à des outils de triche : les IA vont-elles tuer le jeu vidéo ?</h3>
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

export default FirstLink;

