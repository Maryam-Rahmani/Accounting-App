import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/layout"
import Home from "./pages/home"
import Login from "./pages/login"
import Currency from "./pages/currency"
import ReportType from "./pages/report-type"
import Dims from "./pages/dims"
import AccountType from "./pages/account-type"
import Ledger from "./pages/ledger"
import TaxConf from "./pages/tax-conf"
import FiscalYear from "./pages/fiscal-year"
import AccConfMenu from "./pages/acc-conf-menu"
import AccDims from "./pages/acc-dims"
import AccDocsRows from "./pages/acc-docs-rows"
import AccDocs from "./pages/acc-docs"
import AccInputMenu from "./pages/acc-input-menu"
import AccOutputMenu from "./pages/acc-output-menu"
import FinAccounts from "./pages/fin-accounts"
import RootType from "./pages/root-type"
import NotFound from "./pages/not-found"

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/currency" element={<Currency />} />
            <Route path="/report-type" element={<ReportType />} />
            <Route path="/dims" element={<Dims />} />
            <Route path="/account-type" element={<AccountType />} />
            <Route path="/ledger" element={<Ledger />} />
            <Route path="/tax-conf" element={<TaxConf />} />
            <Route path="/fiscal-year" element={<FiscalYear />} />
            <Route path="/acc-conf-menu" element={<AccConfMenu />} />
            <Route path="/acc-dims" element={<AccDims />} />
            <Route path="/acc-docs-rows" element={<AccDocsRows />} />
            <Route path="/acc-docs" element={<AccDocs />} />
            <Route path="/acc-input-menu" element={<AccInputMenu />} />
            <Route path="/acc-output-menu" element={<AccOutputMenu />} />
            <Route path="/fin-accounts" element={<FinAccounts />} />
            <Route path="/root-type" element={<RootType />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>  
      </BrowserRouter>
    </>
  );
}

export default App;
