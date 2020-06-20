import React, { Component } from 'react';
import { PhoneConsumer } from '../context';



export default class SinglePhone extends Component {
    render() {
        return (

            <PhoneConsumer>
                {(value) => {
                    const { company, model, memory, price, image, description, id, extras } = value.detailPhone;

                    return (
                        <section className="details">
                            <div className="details__company">
                                <h2>{company}</h2>
                            </div>
                            <div className="details__wrapper">
                                <div className="details__container">

                                    <div className="details__image-container">
                                        <img src={image} alt="phone" className="details__image" />
                                        <button className="details__buy"
                                            onClick={() => {
                                                value.openModal(id)
                                                value.addToBasket(id)
                                            }}>
                                            Kup
                                </button>
                                    </div>

                                </div>
                                <div className="details__container details__container--right">
                                    <div className="details__model">
                                        <h3><span>Model:</span> {company} {model}</h3>
                                        <h3><span>Cena: </span>{price} zł</h3>
                                        <h3><span>Pamięć: </span>{memory} GB</h3>
                                    </div>
                                </div>
                                <div className="details__description">
                                    <p>{description}</p>
                                </div>
                                <div className="details__extras">
                                    <h3>Dodatkowe informacje:</h3>
                                    <ul>
                                        {extras.map((item, index) => {
                                            return <li key={index}>- {item}</li>
                                        })}
                                    </ul>
                                </div>

                            </div>
                        </section>
                    )
                }}
            </PhoneConsumer>
        )
    }
}

