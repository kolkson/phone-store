import React from 'react';
import { IoIosTrash } from 'react-icons/io';

export default function BasketPhone({ item, value }) {
    const { id, image, price, company, model, count, total } = item;
    const { increment, decrement, removePhone } = value;
    console.log(count);

    return (
        <div className="basket__phone">
            <div className="basket__image--container">
                <img src={image} alt="phone" />
            </div>
            <div className="basket__info">
                <h2>{company} {model}</h2>

            </div>
            <div className="basket__price">
                <h3>Cena: {price.toLocaleString('de-DE')} zł</h3>
            </div>
            <div className="basket__amount">
                <span className="decrement"
                    onClick={() => decrement(id)}>-</span>
                <span className="total">{count}</span>
                <span className="increment"
                    onClick={() => increment(id)}>+</span>
            </div>
            <div className="basket__trash">
                <IoIosTrash
                    className="basket__trash--icon" onClick={() => removePhone(id)} />
            </div>
            <div className="basket__total--phone">
                <strong>Suma: {total.toLocaleString('de-DE')} zł</strong>
            </div>
        </div>
    )
}
