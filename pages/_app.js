"use client";
import "swiper/css";
import "swiper/css/navigation";
import LoaderLottie from "../public/images/loader/loader.gif";
import Image from "next/image";
import "../public/css/bootstrap.min.css";
import "../public/css/style.css";
import "../public/css/responsive.css";
import { useEffect, useState } from "react";
import { ThemeProvider } from "../util/context/ThemeContext";
import LottieControl from "../components/elements/LottieLoader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Animate elements on scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeProvider>
      {!loading ? (
        <Component {...pageProps} />
      ) : (
        <div className="preloader">
          <LottieControl />
        </div>
      )}
    </ThemeProvider>
  );
}

export default MyApp;
