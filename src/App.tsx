import { BrowserRouter, Route, Routes } from "react-router-dom";
import TransactionPage from "@/pages/TransactionPage";
import ExchangePage from "@/pages/ExchangePage";
import { Header } from "@/components/header/Header";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Header />
      <Routes>
        <Route index element={<ExchangePage />} />
        <Route path="/transaction" element={<TransactionPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
