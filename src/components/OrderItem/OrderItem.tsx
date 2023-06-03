import React from 'react';

interface IProps {
name: string;
count: number;
price: number;
onRemoveItem: React.MouseEventHandler;
}

const OrderItem: React.FC<IProps> = (props) => {
    return (
        <div className="orderItem">
            <span>{props.name}</span>
            <span>x {props.count}</span>
            <span>{props.price} KGS</span>
            <button onClick={props.onRemoveItem}>X</button>
        </div>
    );
};

export default OrderItem;