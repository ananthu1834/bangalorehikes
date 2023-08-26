import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { initGA } from '../components/ga';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initGA();
  }, []);

  return <Component {...pageProps} />
}
