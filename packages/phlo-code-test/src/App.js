import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Router } from "@reach/router";
import ContactForm from "./components/Form";
import { theme, GlobalStyle } from "@phlo/component-library";
import Map from "./components/Map";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Loading from "./components/Loading";
import {
  CarePlans,
  About,
  Services,
  Emergency,
  AppointmentConfirmation,
} from "./screens";
import useGeoLocation from "./hooks/useGeoLocation";
import { getNearbyDoctors } from "./api";

function App() {
  const location = useGeoLocation();
  const [doctors, setDoctors] = React.useState([]);
  const [selectedDoctor, setSelectedDoctor] = React.useState([]);
  const [coordinates, setCoordinates] = React.useState({});
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setCoordinates({ lat: location.coords.lat, lng: location.coords.lng });
  }, [location.coords.lat, location.coords.lng]);

  React.useEffect(() => {
    getNearbyDoctors(coordinates.lat, coordinates.lng).then((data) => {
      setDoctors(data);
    });
  }, [coordinates.lat, coordinates.lng]);

  const Routes = () => {
    return (
      <Router className="main">
        <Map
          path="/"
          coordinates={coordinates}
          doctors={doctors}
          openModal={setIsOpen}
          setSelectedDoctor={setSelectedDoctor}
        />
        <CarePlans path="/care-plans" />
        <About path="/about" />
        <Services path="/services" />
        <Emergency path="/emergency" />
        <AppointmentConfirmation path="/appointment-confirmation/:appointment" />
      </Router>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Header />
        {!location.loaded ? <Loading /> : <Routes />}
        <Modal close={setIsOpen} open={isOpen}>
          <ContactForm close={setIsOpen} doctor={selectedDoctor} />
        </Modal>
      </div>
    </ThemeProvider>
  );
}

export default App;
