import React from 'react';
import { Link } from 'react-router-dom';

export default function BasketTotals({ value }) {
    const { basketTotal, clearBasket } = value
    return (
        <div className="basket__total">
            <h5>Suma Zamówienia: {basketTotal.toLocaleString('de-DE')} zł</h5>
            <Link to='/basket'>
                <button className="basket__remove"
                    onClick={() => clearBasket()}>
                    usuń wszystko
            </button>
            </Link>
        </div >
    )
}
