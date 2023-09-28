import React, { useState } from 'react'

const Cities = () => {
    const [isOpen, setIsOpen] = useState(null);

    const data = [
        { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
        { name: "Australia", value: "AUS", cities: ["Sydney", "Canberra"] },
        { name: "USA", value: "US", cities: ["New York", "Los Angeles"] }
    ];

    const handleChange = (e) => {
        let index = data.findIndex((ele) => ele.value === e.target.value);
        setIsOpen(index);
    };

    return (
        <>
            <select onChange={handleChange}>
                <option value="">Select Country</option>
                {data.map((el, i) => {
                    return (
                        <option key={i} value={el.value}>
                            {el.name}
                        </option>
                    );
                })}
            </select>
            <select>
                {data[isOpen]?.cities.map((el, i) => {
                    return (
                        <option key={i} value={el}>
                            {el}
                        </option>
                    );
                })}
            </select>
        </>
    )
}

export default Cities;