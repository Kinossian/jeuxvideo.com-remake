import EnCeMoment from '@/modules/en_ce_moment';
import React from 'react';

const Index = () => {
  return (
    <div className='border-8 border-b-0 border-black  h-screen lg:max-w-5xl lg:mt-20 mx-auto'>
      <h2 className='bg-zinc-800 font-normal text-xs text-zinc-400 py-8 pl-6'>Bienvenue sur jeuxvideo.com ! <strong>JV : le site d'&apos;actualité des jeux vidéo et du high-tech.</strong></h2>
      <EnCeMoment />
    </div>
  );
};

export default Index;