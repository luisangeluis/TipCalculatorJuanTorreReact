import React from 'react'
import { OrderItem } from '../types'
import { formatCurrency } from '../helpers'

interface OrderContentsProps {
  order: OrderItem[];
  deleteItem: (id: OrderItem["id"]) => void;
}

const OrderContents = ({ order, deleteItem }: OrderContentsProps) => {
  return (
    <div>
      <h2 className="font-black text-4xl">Order</h2>
      <section className="space-y-3 mt-10">
        {
          order.map(item => (
            <article
              key={item.id}
              className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">
              <div>
                <h3 className="text-lg">{item.name} - {formatCurrency(item.price)}</h3>
                <h3 className="font-black">Quantity: {item.quantity} - {formatCurrency(item.price * item.quantity)}</h3>

              </div>
              <button
                className="bg-red-600 h-8 w-8 rounded-full  text-white font-black"
                onClick={() => deleteItem(item.id)}
              >
                X
              </button>
            </article>
          ))

        }
      </section>
    </div>
  )
}

export default OrderContents