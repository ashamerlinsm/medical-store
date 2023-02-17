import React from 'react';
import './Medicals.css'

const Medicals = ({ Medicalslist, handleAddMedical }) => {
    return (
        <div className="Medicals">
            {Medicalslist.map((Medicals) => (
                <div className='card'>
                    <div>
                        <img className='Medical-image'
                            src={Medicals.image}
                            alt={Medicals.name} />
                    </div>
                    <div>
                        <h3 className='Medical-name'>{Medicals.name}</h3>
                    </div>
                    <div>
                        <h3 className='Medical-price'>Price :{Medicals.Price}</h3>
                    </div>
                    <div>
                        <button className='Medical-add-button' onClick={() => handleAddMedical(Medicals)}> Add to Favourite</button>
                    </div>
                    <div>
                <a href={Medicals.link} target="_blank">
                     <button className="btnStyle"> Buy Now </button>
                </a>
                </div>
                </div>
            ))}
        </div>
    );
}

export default Medicals;