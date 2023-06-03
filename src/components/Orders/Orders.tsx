import React from 'react';
import {ITEMS} from "../../constants/constants";
import {TStateItem} from "../../types/types";
import OrderItem from "../OrderItem/OrderItem";

interface IProps {
    totalItemsCount: number;
    items: TStateItem[];
    removeItem: (id: string) => void;
    totalSum: number;
}

const Orders: React.FC<IProps> = ({totalItemsCount, items, removeItem, totalSum}) => {
    return (
        <div className="orders">
            <p className="orderDetails">Order details</p>

            {totalItemsCount ? (
                <div className="order">
                    {
                        items.map((item, index) => {
                            if(item.count > 0) {
                                return (
                                  <OrderItem key={item.id} name={item.name} count={item.count} price={ITEMS[index].price} onRemoveItem={() => removeItem(item.id)} />
                                );
                            }
                            return null;
                        })
                    }
                </div>
            ) : (<div>Вы еще ничего не заказали</div>)}

            <p className="price">С вас столько денег: {totalSum} KGS</p>
        </div>
    );
};

export default Orders;