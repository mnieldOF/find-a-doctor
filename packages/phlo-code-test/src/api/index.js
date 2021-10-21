const RADIUS = 2500;
const URL = "https://trueway-places.p.rapidapi.com/FindPlacesNearby";

const getNearbyDoctors = async (lat, lng) => {
  try {
    const response = await fetch(
      `${URL}?location=${lat}%2C${lng}&type=doctor&radius=${RADIUS}&language=en`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "trueway-places.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_RAPID_API,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getNearbyDoctors };
