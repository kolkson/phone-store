import React, { Component } from 'react';
import styled from 'styled-components';
import { PhoneConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <PhoneConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { company, image, price, model } = value.modalPhone;
                    if (!modalOpen) {
                        return null;
                    } else {
                        return (
                            <ModalContainer>
                                <div className="modal">
                                    <h3>Produkt został dodany do koszyka</h3>
                                    <div className="modal__image--conatiner">
                                        <img src={image} alt="phone" />
                                    </div>
                                    <h4>{company} {model}</h4>
                                    <h5>Cena: {price} złotych</h5>
                                    <Link to='/phones'>
                                        <button
                                            className="modal__buy modal--store"
                                            onClick={() => closeModal()}>
                                            sklep
                                  </button>
                                    </Link>
                                    <Link to='/basket'>
                                        <button
                                            className="modal__buy modal--basket"

                                            onClick={() => closeModal()}>
                                            idź do koszyka
                                       </button>
                                    </Link>
                                </div>
                            </ModalContainer>
                        )
                    }
                }}
            </PhoneConsumer>
        )
    }
}


const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.2);
display:flex;
align-items:center;
justify-content:center;
#modal{
background:var(--mainWhite)
}
`

