import React, {useState} from 'react';
import {TStateItem} from "./types/types";
import './App.css';
import {ITEMS} from "./constants/constants";

const App = () => {
    const [item, setItems] = useState<TStateItem[]>([
        {id: 'dkjash21aswhk',name: 'Hamburger', count: 0},
        {id: 'dk32sh21aswhk',name: 'Cheeseburger', count: 0},
        {id: 'dkjash21acsahk',name: 'Fries', count: 0},
        {id: 'd2wyash21aswhk',name: 'Coffee', count: 0},
        {id: 'dsf34h21aswhk',name: 'Tea', count: 0},
        {id: '213sfh2134rehk',name: 'Cola', count: 0},
    ]);
    return (
        <div className="App">
            <div className="orders">Order details</div>

            <div className="items">
                {ITEMS.map((item => (
                    <div className="item">
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
