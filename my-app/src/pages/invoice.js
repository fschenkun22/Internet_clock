import { useParams } from "react-router-dom"
import { getInvoice } from "./data"


export default function Invoice() {
    let params = useParams()
    let invoice = getInvoice(parseInt(params.invoiceId, 10))
    return (
        <main style={{ padding: "1rem" }}>
            <p>当前参数：{invoice.number}</p>
            <h2>Total Due:{invoice.amount}</h2>
            <p>
                {invoice.name}:{invoice.number}
            </p>
            <p>Due Date:{invoice.due}</p>

        </main>

    )
}