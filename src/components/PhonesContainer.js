import React from 'react';
import Phonesfilter from './Phonesfilter';
import PhonesList from './PhonesList';
import { withPhoneConsumer } from '../context';


function PhonesContainer({ context }) {
    const { sortedPhones, phones } = context;

    return (
        <>
            <Phonesfilter phones={phones} />
            <section className="phonesList">
                <PhonesList phones={sortedPhones} />
            </section>
        </>
    )
}

export default withPhoneConsumer(PhonesContainer)