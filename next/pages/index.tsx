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
          <a
            target="_blank"
            href="https://twin.services"
            className="uppercase underline"
            rel="noopener"
          >
            T.W.I.N <span className="lowercase">srl</span>
          </a>
        </p>
      ),
    },
  ];

  return (
    <Layout>
      <article className="container mx-auto">
        <div className="mt-20vh">
          <h2 className="font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            I'm Giacomo Pasin. <br />
            IB Student and <br />
            Software Developer
          </h2>
          <div className="grid md:grid-cols-3 gap-16 mt-12">
            {highlights.map(({ title, description }, idx) => (
              <div key={idx} className="py-2 border-t-2">
                <h3 className="lowercase text-2xl md:text-4xl">{title}</h3>
                <p className="mt-2 lowercase text-md">{description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-32">
          <h2
            id="projects"
            className="font-bold lowercase text-2xl sm:text-4xl md:text-5cl lg:text-6xl xl:text-7xl"
          >
            Projects
          </h2>
          <p className="mt-10">
            <i>projects coming soon...</i>
          </p>
        </div>
      </article>
    </Layout>
  );
};

export default Home;
