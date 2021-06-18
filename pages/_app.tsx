import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { appWithTranslation } from 'next-i18next';
import { AppProps as NextAppProps } from 'next/app';
import React, { FC, useEffect } from 'react';
import 'swiper/swiper.scss';
import '../src/styles/global.css';
import '../src/styles/tailwind.css';
import theme from '../src/styles/theme';


type AppProps = NextAppProps & { err?: Error & { statusCode?: number } };

const App: FC<AppProps> = ({ Component, pageProps, err, router }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        <Component {...pageProps} err={err} key={router.route} />
      </ThemeProvider>
    </>
  );
};

export default appWithTranslation(App);
