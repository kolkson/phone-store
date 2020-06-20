import React from 'react';
import BasketPhone from './BasketPhone';

export default function BasketList({ value }) {
    const { basket } = value

    return (
        <div className="basket__list">
            {basket.map(item => {
                return <BasketPhone
                    key={item.id}
                    item={item}
                    value={value} />
            })}
        </div>
    )
}
