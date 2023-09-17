import React from 'react';
import Button from '../../Button';
import videoBackground from '../../../img/bandeau.mp4';

const Bandeau = ({ setActiveCategory }) => {
  return (
    <>
      <div className="w-full z-[-1] fixed top-0 left-0 right-0">
        <video
          autoPlay
          loop
          muted
          className="max-h-screen w-full object-cover object-right"
        >
          <source src={videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute w-full top-60 py-3 inset-x-0 text-center leading-4">
          <h1 className="text-6xl body-font font-Yeseva m-5 uppercase  tracking-[.3em] ">
            Wonderflower
          </h1>
          <p className="text-2xl m-5">
            Embellissons la vie des personnes qui nous entourent
          </p>
          <Button text={'Notre collection'} />
        </div>
      </div>
    </>
  );
};

export default Bandeau;
