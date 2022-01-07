import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Expenses from "./pages/expenses";
import Invoice from "./pages/invoice";
import Invoices from "./pages/invoices";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route path="invoiceId" element={<Invoice/>}/>
        </Route>
        {/* 什么都没有的路由 */}
        <Route path="*" element ={
          <main style={{padding:"1rem"}}>
            <p>There is nothing here!</p>
          </main>
        }/>
      </Route>
    </Routes>
  </BrowserRouter>
  , rootElement
)
console.log(rootElement);
