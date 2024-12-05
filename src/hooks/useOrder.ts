import React, { useState } from 'react'
import { MenuItem, OrderItem } from '../types';

const useOrder = () => {
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip,setTip] = useState(0);

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

    const deleteItem=(id:OrderItem["id"])=>{
        const newOrder = order.filter(item=>item.id!==id);

        setOrder(newOrder);
    }

    const cleanOrder=()=>{
        setOrder([]);
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        deleteItem,
        cleanOrder
    }

}

export default useOrder;
