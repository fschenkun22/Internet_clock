import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getInvoices } from './data';

export default function invoices() {
  let invoices = getInvoices()
  return (
    <>
      <main style={{ padding: "1rem 0" }}>
        <h2>Invoices</h2>
      </main>
      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem"
          }}
        >
          {
            invoices.map(invoice => (
              <Link
                style={{ display: "block", margin: "1rem 0" }}
                to={`/invoices/${invoice.number}`}
                key={invoice.number}
              >
                {invoice.name}
              </Link>
            ))
          }

        </nav>
        <Outlet/>
      </div>

    </>
  )
}
