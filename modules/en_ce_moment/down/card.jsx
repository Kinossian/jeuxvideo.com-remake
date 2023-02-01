import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CardDown = ({ href, image }) => {
    return (
        <Link href={href} className='group snap-start '>
            <Image
                className='w-full h-1/2 object-cover object-center rounded'
                src={image}
                alt="image"
                height={400}
                width={400}
            />
            <div className=' w-56'>
                <h3 className='group-hover:text-blue-500 ease-out duration-200 mb-1 font-semibold text-gray-300 text-sm '>
                    De ChatGPT à des outils de triche : les IA vont-elles tuer le jeu vidéo ?
                </h3>
                <div className='flex items-center text-xs text-gray-300'>
                    <p className='font-extralight text-[11px] min-w-fit'>Il y a 33 minutes</p>
                    <p className='icon-in-card'>5</p>
                    <p className='icon-in-card'>PC</p>
                </div>
            </div>
        </Link>
    );
};

export default CardDown;