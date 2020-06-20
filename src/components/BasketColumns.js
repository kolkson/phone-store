import React from 'react'

export default function BasketColumns() {
    return (
        <div className="basket__columns">
            <ul className="basket__columns--list">
                <li>produkty</li>
                <li>model</li>
                <li>cena</li>
                <li>ilość</li>
                <li>usuń</li>
                <li>suma</li>
            </ul>
        </div>
    )
}
