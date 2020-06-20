import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PhoneConsumer } from '../context';

export default function Phone({ phone }) {


    const { company, model, image, price, id, inBasket } = phone;
    return (
        <>
            <PhoneConsumer>
                {value => (
                    <div className="phonesList__phone" >

                        <div className="phonesList__image-container">
                            <img src={image} alt="hello" />
                        </div>
                        <div className="phonesList__price">
                            <p>{`${price} zł`}</p>
                        </div>
                        <div className="phonesList__background">

                            <div className="phonesList__details"
                                onClick={() => value.handleDetail(id)}>
                                <Link to={`/phones/details`}>
                                    Sprawdź szczegóły
                </Link>
                            </div>

                        </div>
                        <div className="phonesList__model">
                            <p>{`${company} ${model}`}</p>
                            <button className="phonesList__buy"
                                disabled={inBasket ? true : false}
                                onClick={() => {
                                    value.addToBasket(id)
                                    value.openModal(id)
                                }}>
                                {inBasket ? (<p disabled>w koszyku</p>) : 'kup'}
                            </button>
                        </div>

                    </div>
                )}
            </PhoneConsumer>
        </>
    )

}

Phone.propTypes = {
    phone: PropTypes.shape({
        company: PropTypes.string,
        model: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
        memory: PropTypes.string,
    }).isRequired
}