import React from 'react';
import data from './components/back/Data/Data'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/front/Header/Header'
import Myroutes from './components/front/Routes/Routes'


function App() {
  const { Medicalslist } = data;
  const [favourites, setfavourites] = useState([]);

  const handleAddMedical = (Medical) => {
    const MedicalExist = favourites.find((MedicalItem) => MedicalItem.id === Medical.id);

    if (MedicalExist) {
      setfavourites(
        favourites.map((MedicalItem) =>
          MedicalItem.id === Medical.id
            ? { ...MedicalExist, quantity: MedicalExist.quantity + 1 } : MedicalItem)
      );
    }
    else {
      setfavourites([...favourites, { ...Medical, quantity: 1 }]);
    }
  }

  const handleRemoveMedical= (Medical) => {
    const MedicalExist = favourites.find((MedicalItem) => MedicalItem.id === Medical.id);

    if (MedicalExist.quantity === 1) {
      setfavourites(favourites.filter((MedicalItem) => MedicalItem.id !== Medical.id));
    }
    else {
      setfavourites(
      favourites.map((MedicalItem) =>
        MedicalItem.id === Medical.id
          ? { ...MedicalExist, quantity: MedicalExist.quantity - 1 } : MedicalItem)
      );
    }
  }

  const handleClearance = ()=> {
    setfavourites([]);
  }

  return (
    <div className="App">
     
       <Header/>
       <Myroutes Medicalslist={Medicalslist} favourites={favourites}
          handleAddMedical={handleAddMedical}
          handleRemoveMedical={handleRemoveMedical}
          handleClearance={handleClearance}
        />
   
    </div>
  );
}

export default App;
