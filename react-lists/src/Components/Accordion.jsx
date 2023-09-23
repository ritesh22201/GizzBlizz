import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

export const Accordion = () => {
  // const [isOpen, setIsOpen] = useState(Array(5).fill(false));
  const [isOpen, setIsOpen] = useState(null);
  const [showData, setShowData] = useState(false);
  const data = [
    { id: 1, q: "How are you?", a: "I am good." },
    { id: 2, q: "When you will be?", a: "I am home" },
    {
      id: 3,
      q: "When will be home?",
      a:
        "At 7 dsfkdsfjdslfkdsjfdskfhskhferoigfwjjuowfhewfidfhsdajkfeshferukherwfiuehferu"
    }
  ];

  const handleOpen = (i) => {
    // let ansArr = new Array(isOpen.length).fill(false);
    // ansArr[i] = !ansArr[i];
    // setIsOpen(ansArr);
    const val = isOpen === i ? null : i;
    setIsOpen(val);
  };

  return (
    <>
      {data.map((el, i) => {
        return (
          <>
            <div
              key={i}
              onClick={() => handleOpen(i)}
              style={{ backgroundColor: "gray" }}
            >
              {el.q} {isOpen === i ? <AiOutlineDown /> : <AiOutlineUp />}
            </div>
            {isOpen === i && (
              <div>
                {el.a.substring(0, 3)}{" "}
                <button onClick={() => setShowData(!showData)}>
                  {!showData ? "showmore" : "showless"}
                </button>
              </div>
            )}
            {showData && isOpen === i && (
              <p>{el.a.substring(4, el.a.length - 1)}</p>
            )}
          </>
        );
      })}
    </>
  );
};