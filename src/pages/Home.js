import React from 'react';
import Slider from '../components/Slider';
import Advertisement from '../components/Advertisement';


export default function Home() {
    return (
        <>
            <section className="advertisement">
                <Advertisement />
                <Slider />
            </section>

        </>
    )
}

