import React, { useState } from 'react'
import { OrderItem } from '../types';

const useOrder = () => {
    const [order, setOrder] = useState<OrderItem[]>([]);
    console.log("test2");
    

    return {
        order
    }

}
