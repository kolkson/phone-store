import React from 'react';
import Phone from './Phone';

export default function PhonesList({ phones }) {

    if (phones.length === 0) {
        return (
            <div className="phonesList__empty">
                <h3>Niestety wybrane parametry nie pasują do żadnego modelu</h3>
            </div>
        )
    }
    return (
        <>
            {
                phones.map(item => {
                    return <Phone key={item.id} phone={item} />;
                })
            }
        </>
    )
}




