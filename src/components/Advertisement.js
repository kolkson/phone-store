import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowUp } from 'react-icons/io'

export const Advertisement = () => {
    return (
        <>
            <Link to="/phones">
                <div className="advertisement__offer">
                    <p><span>Sprawdź</span> naszą ofertę</p>

                </div>
            </Link>
            <div className="advertisement__arrows">
                <IoIosArrowUp className="advertisement__arrow" />
                <IoIosArrowUp className="advertisement__arrow" />
                <IoIosArrowUp className="advertisement__arrow" />
            </div>
        </>
    )
}

export default (Advertisement)




