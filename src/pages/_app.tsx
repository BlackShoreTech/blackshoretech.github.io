import { ReactNode } from 'react';

import { AppProps } from 'next/app';
import Script from 'next/script';

import '../styles/global.css';
import { AppConfig } from '../utils/AppConfig';

type ComponentWithPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: React.FC<{ children: ReactNode }>;
  };
};

const MyApp = ({ Component, pageProps }: ComponentWithPageLayout) => (
  <>
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${AppConfig.gtm_id}');
      `}
    </Script>
    {Component.PageLayout ? (
      <Component.PageLayout>
        <Component {...pageProps} />
      </Component.PageLayout>
    ) : (
      <Component {...pageProps} />
    )}
  </>
);

export default MyApp;
