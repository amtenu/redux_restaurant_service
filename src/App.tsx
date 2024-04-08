import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./store";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {
  const [reservationNameInput, setReservationNameInput] = useState("");

  const reservations = useSelector(
    (state: RootState) => state.reservationSlice.value
  );

  const dispatch = useDispatch();

  const handleAddReservations = () => {
    if (!reservationNameInput) {
      return;
    }
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("")
  };
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              <div className="reservation-card-container">
                {reservations.map((name) => {
                  return <ReservationCard key={name} name={name} />;
                })}
              </div>
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p>Solomon</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
