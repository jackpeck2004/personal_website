import React from 'react';
import Layout from '../components/layout';
import { FixedLengthArray } from '../lib/types';

interface Highlight {
  title: string;
  description: React.ReactNode;
}

const Home: React.FC = () => {
  const highlights: FixedLengthArray<Highlight, 3> = [
    {
      title: 'My Passions',
      description: (
        <p>
          software development, electrical engineering, technology, basketball
          and food
        </p>
      ),
    },
    {
      title: 'My academics',
      description: (
        <p>
          currently in IB Diploma Program studying Physics HL, CompSci HL and
          Maths HL
        </p>
      ),
    },
    {
      title: 'My work experience',
      description: (
        <p>
          I'm currently the chief technology officer at{' '}
          <a href="twin.services" className="uppercase underline">
            T.W.I.N <span className="lowercase">srl</span>
          </a>
        </p>
      ),
    },
  ];

  return (
    <Layout>
      <article className="container mx-auto">
        <div className="mt-96">
          <h2 className="font-bold text-8xl">
            {/*Hi,<br />*/} I'm Giacomo Pasin. <br />
            I'm a IB Student and
            <br /> Software Developer
          </h2>
          <div className="grid grid-cols-3 gap-16 mt-12">
            {highlights.map(({ title, description }, idx) => (
              <div key={idx} className="py-2 border-t-2">
                <h3 className="lowercase text-4xl">{title}</h3>
                <p className="mt-2 lowercase text-lg">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Home;
