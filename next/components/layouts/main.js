import Head from "next/head";
import Navbar from "../navigation/Navbar.js";
import "bootstrap/dist/css/bootstrap.css";

const Main = ({ children, router }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* 
	        To set tab-bar color for safari uncomment:
	        <meta name="theme-color" content="#ffffff" />
	    */}
        <title>NextJs Template</title>
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Main;
