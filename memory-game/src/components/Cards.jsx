import React from 'react';

const Cards = ({image, id}) => {
    let imagePath = image ? image : '';
  return (
    <div>
        <img src={imagePath} alt="images" />
    </div>
  )
}

export default Cards;