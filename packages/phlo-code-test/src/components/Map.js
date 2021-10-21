import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "@emotion/styled";
import Doctor from "./Doctor";
import Pin from "../assets/location.svg";
import mapStyles from "./MapStyles";

const MapContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 70px);
`;

const UserPin = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #000;
  background: #fff;
  position: relative;
  img {
    width: 60%;
  }
`;

const Map = ({ coordinates, doctors, openModal, setSelectedDoctor }) => {
  const mapOptions = {
    styles: mapStyles.styles,
  };
  return (
    <div>
      <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={16}
          margin={[50, 50, 50, 50]}
          options={mapOptions}
          onChange={""}
          onChildClick={""}
        >
          {doctors.results?.map((doctor, index) => (
            <Doctor
              key={`gmm_${index}`}
              lat={Number(doctor.location.lat)}
              lng={Number(doctor.location.lng)}
              doctor={doctor}
              index={index}
              openModal={openModal}
              setSelectedDoctor={setSelectedDoctor}
            />
          ))}
          {coordinates ? (
            <UserPin lat={coordinates.lat} lng={coordinates.lng}>
              <img src={Pin} alt="pin" />
            </UserPin>
          ) : null}
        </GoogleMapReact>
      </MapContainer>
    </div>
  );
};

export default Map;
