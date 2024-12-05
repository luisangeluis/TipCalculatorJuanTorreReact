import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

interface OrderTotalsProps {
  order: OrderItem[];
  tip: number,
  cleanOrder: () => void
}

const OrderTotals = ({ order, tip, cleanOrder }: OrderTotalsProps) => {

  const subtotalAmount = useMemo(() => {
    return order.reduce((accum, current) => accum + (current.quantity * current.price), 0)
  }, [order]);

  const tipAmount = useMemo(() => subtotalAmount * tip, [order, tip])
  const totalAmount = useMemo(() => subtotalAmount + tipAmount, [order, tip])

  return (
    <section>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Total and tip</h2>
        <p>
          Subtotal:{" "}
          <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>
        <p>
          Tip:{" "}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total:{" "}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
        disabled={totalAmount === 0}
        onClick={cleanOrder}
      >
        Save order
      </button>
    </section>
  )
}

export default OrderTotals