import React from 'react';
import {ITEMS} from "../../constants/constants";
import {TStateItem} from "../../types/types";
import OrderItem from "../OrderItem/OrderItem";
import pepe from  "../../img/pepe.png"

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
            ) : (
                <div className="emptyCart" style={{textAlign: 'center'}}>
                    <p>Вы еще ничего не заказали</p>
                    <div>
                        <img style={{width: '150px'}} src={pepe} alt="pepe"/>
                    </div>
                </div>
            )}

            <p className="price">С вас столько денег: {totalSum} KGS</p>
        </div>
    );
};

export default Orders;