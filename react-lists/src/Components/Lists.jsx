import { useState } from "react";

export const Lists = () => {
    let arr = ["Play Cricket", "Read Books", "Play Basketball"];
    const [newArr, setNewArr] = useState(arr);
    const [isChecked, setIsChecked] = useState(Array(arr.length).fill(false));
    let newChecked = [...isChecked];

    const handleCheckbox = (i) => {
        newChecked[i] = !newChecked[i];
        setIsChecked(newChecked);
    };

    const handleDelete = (i) => {
        setNewArr([...newArr.filter((el, ind) => ind !== i)]);
        newChecked[i] = !newChecked[i];
        setIsChecked(newChecked);
    };

    return (
        <>
            <ul>
                {newArr?.map((el, i) => {
                    return (
                        <div
                            key={i}
                            style={{ display: "flex", justifyContent: "space-around" }}
                        >
                            <input
                                type="checkbox"
                                checked={isChecked[i]}
                                onChange={() => handleCheckbox(i)}
                            />
                             <li>{el}</li>
                            {isChecked[i] && (
                                <button onClick={() => handleDelete(i)}>Delete</button>
                            )}
                        </div>
                    );
                })}
            </ul>
        </>
    );
};
