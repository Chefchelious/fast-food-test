import React, {useState} from 'react';
import './App.css';
import {TStateItem} from "./types/types";

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
            <div>Order details</div>

            <div>Items</div>
        </div>
    );
};

export default App;
