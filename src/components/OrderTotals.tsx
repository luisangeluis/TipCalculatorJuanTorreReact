import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

interface OrderTotalsProps {
  order: OrderItem[];
}

const OrderTotals = ({ order }: OrderTotalsProps) => {

  const subtotalAmount = useMemo(() => {
    return order.reduce((accum, current) => accum + (current.quantity * current.price), 0)
  }, [order]);

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
          <span className="font-bold">$0</span>
        </p>
        <p>
          Total:{" "}
          <span className="font-bold">$0</span>
        </p>
      </div>
    </section>
  )
}

export default OrderTotals