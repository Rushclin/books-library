import { useEffect } from "react";
import Router from "next/router";
import { initGA, logPageView } from "analytics";
import "swiper/swiper-bundle.min.css";
import "rc-drawer/assets/index.css";
import "react-modal-video/css/modal-video.min.css";
import "typeface-dm-sans";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import { StickyProvider } from "contexts/app/app.provider";

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on("routeChangeComplete", logPageView);
  }, []);

  return (
    <ThemeProvider  theme={theme}>
       <StickyProvider>
      <Component {...pageProps} />
      </StickyProvider>
    </ThemeProvider>
  );
}
