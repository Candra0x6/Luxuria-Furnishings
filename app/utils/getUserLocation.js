import { useEffect, useState } from "react";
import config from "../../config";
import * as Location from "expo-location";

const GetUserLocation = () => {
  const [location, setLocation] = useState("miss");
  const askAccessLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    getLocationName(location.coords.latitude, location.coords.longitude);
  };

  const getLocationName = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `${config.GEOCODING_BASE_URL}?q=${latitude}%2C${longitude}&key=${config.GEOCODING_API_KEY}`
      );
      const data = await response.json();
      setLocation(data.results[0].components);
    } catch (error) {
      console.error("Error fetching location name:", error);
    }
  };

  useEffect(() => {
    askAccessLocation();
  }, []);
  return {
    location,
  };
};

export default GetUserLocation;
