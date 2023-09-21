import React, { useState } from 'react'

const Cities = () => {
    const [isOpen, setIsOpen] = useState(null);
    const data = [
        { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
        { name: "Australia", value: "AUS", cities: ["Sydney", "Canberra"] },
        { name: "USA", value: "US", cities: ["New York", "Los Angeles"] }
    ];
    return (
        <div>Cities</div>
    )
}

export default Cities;