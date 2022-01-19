import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App'
import Expenses from "./pages/expenses";
import Invoices from "./pages/invoices";
import Invoice from "./pages/invoice";

const rootElement = document.getElementById("root")

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />}></Route>
        <Route path="invoices" element={<Invoices />}>
          <Route
          index
          element={
            <main style={{padding:"1rem"}}>
              <p>Select an invoice</p>
            </main>
          }
          >

          </Route>
          <Route path=":invoiceId" element={<Invoice />}></Route>
        </Route>
      </Route>
      <Route
        path="*"
        element={
          <div>nothing here!</div>
        }
      ></Route>

    </Routes>
  </BrowserRouter>
  ,
  rootElement)