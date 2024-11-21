import React, { useState } from 'react'
import { MenuItem, OrderItem } from '../types';

const useOrder = () => {
    const [order, setOrder] = useState<OrderItem[]>([]);

    const addItem = (item: MenuItem) => {
        const index = order.findIndex((orderItem) => orderItem.id === item.id);

        if (index >= 0) {
            const copyOfOrder = [...order];
            copyOfOrder[index].quantity++;
            setOrder(copyOfOrder);
        } else {
            const newOrderItem = { ...item, quantity: 1 };

            setOrder([...order, newOrderItem]);
        }
    }

    return {
        addItem,
        order
    }

}

export default useOrder;
