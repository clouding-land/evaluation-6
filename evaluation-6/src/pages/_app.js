import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import 'font-awesome/css/font-awesome.min.css';
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
   <Layout>
    <Component {...pageProps} />
   </Layout>
    
  );
}

