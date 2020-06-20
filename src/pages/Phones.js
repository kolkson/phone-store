import React from 'react';
import PhonesSale from '../components/PhonesSale';
// import Phonesfilter from '../components/Phonesfilter';
import PhonesContainer from '../components/PhonesContainer';

export default function Phones() {
    return (
        <>
            <section className="phones">
                <PhonesSale />
                <PhonesContainer />
            </section>

        </>
    )
}



