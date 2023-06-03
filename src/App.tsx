import React, {useState} from 'react';
import {TStateItem} from "./types/types";
import {ITEMS} from "./constants/constants";
import Orders from "./components/Orders/Orders";
import Items from "./components/Items/Items";
import './App.css';


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

    const removeItem = (id: string) => {
        setItems((prev) => {
            return prev.map((item) => {
                if (item.id === id) {

                    return {
                        ...item,
                        count: 0,
                    }
                }
                return item;
            });
        });
    };

    const totalSum: number = items.reduce((acc, item, index: number) => acc + item.count * ITEMS[index].price, 0);
    const totalItemsCount = items.reduce((acc, item) => acc + item.count, 0);

    return (
        <div className="App">
            <Orders totalItemsCount={totalItemsCount} items={items} removeItem={removeItem} totalSum={totalSum} />

            <Items items={items} addItem={addItem} />
        </div>
    );
};

export default App;
