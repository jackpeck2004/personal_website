import React from 'react';
import Marquee from 'react-smooth-marquee';

const Scroller: React.FC = () => {
  if (typeof window !== 'undefined') {
    const colors = ['#ee1c4e', 'blue', 'purple', 'magenta'];
    let currentIndex = 0;

    const obj = document.querySelector('.background-fading');

    setInterval(function () {
      //@ts-ignore
      obj.style.cssText = 'background-color: ' + colors[currentIndex];
      currentIndex++;
      if (currentIndex == undefined || currentIndex >= colors.length) {
        currentIndex = 0;
      }
    }, 2000);
  }

  return (
    <div className="background-fading transition duration-4000 py-1">
      <Marquee>
        <p className="whitespace-nowrap uppercase text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id urna
          dolor. Donec lacus sapien, hendrerit dapibus ex ornare, pharetra
          aliquam lacus. Sed iaculis nibh nec suscipit euismod. In fermentum
          nisl nec elementum luctus. Aliquam eu iaculis magna, et vehicula est.
          Duis ultricies laoreet justo, at posuere erat bibendum ut. Cras et
          augue non nisl suscipit faucibus. In a purus eros. Nam lobortis neque
          eu eros luctus lacinia. Praesent eu rutrum eros, id accumsan diam.
          Morbi vel congue arcu, sed efficitur nunc. Curabitur interdum justo
          nec bibendum tincidunt. Aliquam rutrum vehicula porttitor. Donec
          scelerisque, purus in blandit auctor, arcu risus tempus justo, sit
          amet vulputate urna elit a libero.
        </p>
      </Marquee>
    </div>
  );
};

export default Scroller;
