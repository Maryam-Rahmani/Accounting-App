import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Currency from "./pages/currency";
import NotFound from "./pages/not-found";


export default function Source() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="currency" element={<Currency />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>  
    </BrowserRouter>
  );
}



