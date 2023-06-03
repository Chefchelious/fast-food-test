import React, {useState} from 'react';
import {TStateItem} from "./types/types";
import './App.css';
import {ITEMS} from "./constants/constants";

const App = () => {
    const [items, setItems] = useState<TStateItem[]>([
        {id: 'dkjash21aswhk',name: 'Hamburger', count: 0},
        {id: 'dk32sh21aswhk',name: 'Cheeseburger', count: 0},
        {id: 'dkjash21acsahk',name: 'Fries', count: 0},
        {id: 'd2wyash21aswhk',name: 'Coffee', count: 0},
        {id: 'dsf34h21aswhk',name: 'Tea', count: 0},
        {id: '213sfh2134rehk',name: 'Cola', count: 0},
    ]);

    const addItem = (id: string) => {
        setItems(prevState => {
            return prevState.map(item => {
                if(item.id === id) {
                    return {
                        ...item,
                        count: item.count + 1,
                    }
                }
                return item;
            });
        });
    };

    const totalSum: number = items.reduce((acc, item, index: number) => acc + item.count * ITEMS[index].price, 0);
    return (
        <div className="App">
            <div className="orders">
                <p className="orderDetails">Order details</p>
                <div className="order">
                    {
                        items.map((item, index) => {
                            if(item.count === 1) {
                                return (
                                    <div className="orderItem" key={item.id}>
                                        <span>{item.name}</span>
                                        <span>x {item.count}</span>
                                        <span>{ITEMS[index].price} KGS</span>
                                        <button>X</button>
                                    </div>
                                );
                            }
                            if(item.count > 1) {
                                return (
                                    <div className="orderItem" key={item.id} onClick={()=> addItem(item.id)}>
                                        <span>{item.name}</span>
                                        <span>x {item.count}</span>
                                        <span>{ITEMS[index].price * item.count} KGS</span>
                                        <button>X</button>
                                    </div>
                                );
                            }

                            return null;
                        })
                    }
                </div>

                <p className="price">Total price: {totalSum}</p>
            </div>

            <div className="items">
                {ITEMS.map(((item, index: number) => (
                    <div className="item" key={items[index].id} onClick={()=> addItem(items[index].id)}>
                        <div>
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div>
                            <p>{item.name}</p>
                            <p>Price: {item.price} KGS</p>
                        </div>
                    </div>
                )))}
            </div>
        </div>
    );
};

export default App;
