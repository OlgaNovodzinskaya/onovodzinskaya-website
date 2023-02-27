import Carousel from "@web/components/Carousel/Carousel";
import Footer from "@web/components/Footer/Footer";
import styles from "@web/styles/Home.module.css";
import classNames from "classnames/bind";
import { NextPage } from "next";
import Head from "next/head";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Me from "./components/Me";
import Objects from "./components/Objects";
import Review from "./components/Review";
import Services from "./components/Services";

const cn = classNames.bind(styles);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Arsenal:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <div className="bg-[#fdf8ff]">
          <div className={cn("container")}>
            <Header />
            {/* <Carousel /> */}
          </div>
        </div>
        <div className="py-[100px] bg-gradient-to-b from-[#FFF5F3] to-[#fff5f3]">
          <Objects />
          <Services />
        </div>
        <Me />
        <Contact />
        <Review />
        <Footer />
      </main>
    </>
  );
};

export default Home;
