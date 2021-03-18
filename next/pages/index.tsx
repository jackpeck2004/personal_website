import React from "react";
import Layout from "../components/layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto flex flex-col h-screen bg-gray-500">
        <h1>Hi, I'm Giacomo Pasin.</h1>
        <h2>I'm an IB Student and a Software Developer</h2>
      </div>
    </Layout>
  );
};

export default Home;
