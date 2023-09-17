import React from 'react';
import TextAnimation from '../../TextAnimation';

const Banner = () => {
  return (
    <header className=" bg-green-900 text-sm text-white pt-2 pb-1 leading-normal">
      <div className="ml-[30vw] text-[1em] tracking-[.3em]">
        <TextAnimation text="BOUQUETS DE FLEURS ET PLANTES - LIVRAISON 24H EN FRANCE" />
      </div>
    </header>
  );
};

export default Banner;
