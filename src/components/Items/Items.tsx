import React from 'react';
import {ITEMS} from "../../constants/constants";
import {TStateItem} from "../../types/types";

interface IProps {
    items: TStateItem[];
    addItem: (id: string) => void;
}

const Items: React.FC<IProps> = ({items, addItem}) => {
    return (
        <div className="items">
            {ITEMS.map(((item, index: number) => (
                <div className="item" key={items[index].id} onClick={()=> addItem(items[index].id)}>
                    <div className="imgWrap">
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div>
                        <p>{item.name}</p>
                        <p>Price: {item.price} KGS</p>
                    </div>
                </div>
            )))}
        </div>
    );
};

export default Items;