import {TItem} from "../types/types";

import foodImg from '../img/food.png';
import drinkImg from '../img/drink.png';

export const ITEMS: TItem[] = [
    {name: 'Hamburger', price: 80, image: foodImg},
    {name: 'Cheeseburger', price: 90, image: foodImg},
    {name: 'Fries', price: 45, image: foodImg},
    {name: 'Coffee', price: 70, image: drinkImg},
    {name: 'Tea', price: 50, image: drinkImg},
    {name: 'Cola', price: 40, image: drinkImg},
];