import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import 'font-awesome/css/font-awesome.min.css';
import Layout from "@/components/Layout";
import Nav from "@/components/Nav";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Nav />
    <Component {...pageProps} />
    </>
  );
}

