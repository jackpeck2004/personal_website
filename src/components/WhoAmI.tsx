/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import '../styles/WhoAmI.scss';

const WhoAmI = () => {
  return (
    <div className="WhoAmI" id="whoami">
      <img
        src="https://uisidict.sirv.com/Images/GiacomoPasin.jpg"
        width="1134"
        height="2016"
        alt=""
        className="image"
      />
      <h2>Who am I?</h2>
      <p>
        I'm an IB Diploma student @{' '}
        <a
          href="https://www.h-is.com/en/schools/treviso"
          className="link"
          target="_blank"
        >
          H-International School of Treviso
        </a>
        , meanwhile being the CTO of{' '}
        <a href="https://twin.services" className="link" target="_blank">
          T.W.I.N srl
        </a>
      </p>
    </div>
  );
};

export default WhoAmI;
