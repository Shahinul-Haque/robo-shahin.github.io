import React from 'react';

const Card = ({email,name,id}) => {
    return(
      <div className='tc bg-light-green dib br3 pa3 ma2 grow'>
        <img src={`https://robohash.org/${id}`} alt='robots' />
        <div>
             <h2>{name}</h2>
             <p>{email}</p>
        </div>   

      </div>
    );
}

export default Card;

//200×200