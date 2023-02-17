import React from 'react';
import { Route, Routes, Link, NavLink } from 'react-router-dom';


import Medicals from '../Medicals/Medicals';
import SignIn from '../Signin/Signin';
import Favourite from '../Favourites/Favourite';

const Myroutes = ({ Medicalslist, favourites, handleAddMedical, handleRemoveMedical, handleClearance }) => {
    return (
        <div>
            <Routes>
                <Route path='/' exact element={
                    <Medicals Medicalslist={Medicalslist}
                        handleAddMedical={handleAddMedical} />}>
                </Route>

                <Route path='/signin' exact element={<SignIn />}>
                </Route>

                <Route path='/cart' exact element={
                    <Favourite favourites={favourites}
                        handleAddMedical={handleAddMedical} 
                        handleRemoveMedical= {handleRemoveMedical}
                        handleClearance={handleClearance}
                        /> }>
                </Route>

            </Routes>
        </div>
    );
}

export default Myroutes;