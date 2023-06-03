import React from 'react';
import musr from "../../img/garbage.png"

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
            <div className="priceAndBtn">
                <span>{props.price} KGS</span>
                <button onClick={props.onRemoveItem}><img src={musr} alt="musr"/></button>
            </div>
        </div>
    );
};

export default OrderItem;