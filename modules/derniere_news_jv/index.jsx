import React from 'react';
import FirstLink from './first_link';
import HeaderDerniereNews from './header';
import CardContainerDerniereNews from './card_container';


const DerniereNewsJV = () => {
    return (
        <div className='bg-zinc-900 px-6'>
            <HeaderDerniereNews />
            <FirstLink />
            <CardContainerDerniereNews />
        </div>
    );
};

export default DerniereNewsJV;

FirstLink.defaultProps = {
    href: 'https://www.jeuxvideo.com/'
};