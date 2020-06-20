import React from 'react'
import { useContext } from 'react';
import { PhoneContext } from '../context';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function Phonesfilter({ phones }) {
    const context = useContext(PhoneContext);
    const { handleFilterChange, company, price, minPrice, maxPrice, memory } = context;

    let brands = getUnique(phones, 'company');

    brands = ['all', ...brands];
    brands = brands.map((item, index) => {
        return <option value={item} key={index}>
            {item}
        </option>
    })

    let memories = getUnique(phones, 'memory');

    memories = ['all', ...memories];
    memories = memories.map((item, index) => {
        return <option value={item} key={index}>
            {item !== 'all' ? `${item} GB` : 'all'}
        </option>
    })

    return (

        <div className="filter">

            <div className="filter__group">
                <label htmlFor="brand"> Marka</label>
                <select
                    name="company"
                    className="filter__control"
                    value={company}
                    id="brand"
                    onChange={handleFilterChange}>
                    {brands}
                </select>
            </div>
            <div className="filter__group">
                <label htmlFor="price">Cena {price} zł</label>
                <input type="range"
                    name="price"
                    max={maxPrice}
                    min={minPrice}
                    className="filter__control"
                    value={price}
                    id="price"
                    onChange={handleFilterChange} />
            </div>

            <div className="filter__group">
                <label htmlFor="memory"> Pamięć</label>
                <select
                    name="memory"
                    className="filter__control"
                    value={memory}
                    id="memory"
                    onChange={handleFilterChange}>
                    {memories}
                </select>
            </div>


        </div>


    )

}



