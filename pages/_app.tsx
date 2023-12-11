'use-client'
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  const InstanceComponent = Component as any
  return <InstanceComponent {...pageProps} />;
};

export default App;