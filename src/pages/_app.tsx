import '../styles/globals.css'
import {useEffect, useState} from 'react'
import type { AppProps } from 'next/app'
import SiteContext from '../context/SiteContext'

const sites: any = {
  'localhost:3000': 1,
  'domain1:3000': 2,
  'domain2:3000': 3,
}
export default function App({ Component, pageProps }: AppProps ) {
  const [siteId, setSiteId] = useState(sites[pageProps.domain] || 0)
  useEffect(() => {
    setSiteId(sites[pageProps.domain] || 0)
  }, [pageProps.domain])
  return <SiteContext.Provider value={{siteId, setSiteId}} ><Component {...pageProps} domain={pageProps.domain} /></SiteContext.Provider>
}

App.getInitialProps = async ({ Component, ctx }: any) => {
  let pageProps = {};

  const domain = ctx.req ? ctx.req.headers.host : window.location.hostname;

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  // Add the domain to pageProps
  pageProps = { ...pageProps, domain };

  return { pageProps };
}