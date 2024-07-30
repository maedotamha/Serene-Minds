import React from 'react';
import Image from 'next/image';
interface CardWithTextProps {
  imageSrc: string;
  title: string;
  buttonText: string;
}

function CardWithText(props: CardWithTextProps) {
  return (
    <div className="card bg-base-100 w-72 shadow-xl rounded-md ml-4">
      <figure className='relative'>
        <img src={props.imageSrc} alt=""  style={{objectFit: 'fill'}} className='rounded'/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <div className="card-actions">
          <button className="btn btn-primary">{props.buttonText}</button>
        </div>
      </div>
    </div>
  );
}

export default CardWithText;