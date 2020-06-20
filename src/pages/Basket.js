import React, { Component } from 'react';
import EmptyBasket from '../components/EmptyBasket';
import BasketColumns from '../components/BasketColumns';
import { PhoneConsumer } from '../context';
import BasketList from '../components/BasketList';
import BasketTotals from '../components/BasketTotals';

export default class Basket extends Component {

    render() {
        return (
            <section className="basket">

                <PhoneConsumer>
                    {(value) => {
                        const { basket } = value;
                        if (basket.length > 0) {
                            return (
                                <>
                                    <div className="basket__your">
                                        <p>twój koszyk:</p>
                                    </div>
                                    <BasketColumns />
                                    <BasketList
                                        value={value} />
                                    <BasketTotals
                                        value={value} />
                                </>
                            )
                        } else {
                            return (
                                <EmptyBasket />
                            )
                        }
                    }}
                </PhoneConsumer>
            </section>)
    }
}
