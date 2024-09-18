import React, { useRef, useState } from 'react';
import { AVAILABLE_PLACES } from '../data.tsx';
import Places from '../components/Places.tsx';
import Modal from '../components/Modal.tsx';
import DeleteConfirmation from '../components/DeleteConfirmation.tsx';
import "./index.scss";
const SelectImage= () => {
  let modal : any = useRef();
  let selectedPlace : any = useRef();
  let [pickedPlaces, setPickedPlaces] = useState([]);

  const handleStartRemovePlace = (id : number) => {
    modal.current.open();
    if(selectedPlace.current){
        selectedPlace.current = id;
    }
  }

  function handleStopRemovePlace() {
    modal.current.close();
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces : any) => {
      if (prevPickedPlaces.some((place : any) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place : any) => place.id !== selectedPlace.current)
    );
    if (modal.current) {
        modal.current.close();
    }
  }

  return (
    <>
      <Modal ref={modal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        {/* <img src={logoImg} alt="Stylized globe" /> */}
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
            title="Available Places"
            places={AVAILABLE_PLACES}
            onSelectPlace={handleSelectPlace} 
            fallbackText={undefined}        
        />
      </main>
    </>
  );
}

export default SelectImage;
