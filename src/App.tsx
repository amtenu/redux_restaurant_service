import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./store";
import ReservationCard from "./components/ReservationCard";

function App() {
  const reservations = useSelector(
    (state: RootState) => state.reservationSlice.value
  );
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              <div className="reservation-card-container">
                {reservations.map((name) => {
                  return <ReservationCard name={name} />;
                })}
              </div>
            </div>
          </div>
          <div className="reservation-input-container">
            <input />
            <button>Add</button>
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
