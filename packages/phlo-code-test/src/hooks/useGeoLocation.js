import React from "react";

const useGeoLocation = () => {
  const [location, setLocation] = React.useState({
    loaded: false,
    coords: { lat: "", lng: "" },
  });

  const onSucess = (location) => {
    setLocation({
      loaded: true,
      coords: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error: error,
    });
  };

  React.useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }
    navigator.geolocation.getCurrentPosition(onSucess, onError);
  }, []);

  return location;
};

export default useGeoLocation;
