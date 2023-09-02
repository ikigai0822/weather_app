import axios from "axios"

export const  getWeather = async (city, country) => {
  const options = {
    method: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather',
    params: { q: `${city},${country}`, APPID: 'eaca2b5945fcdd4aa67ea2cca13dc7f7' }
  }

  try {
        const response = await axios.request(options)
        return response.data
    } catch (error) {
      console.log('Error while calling the api ', error.message);
      return error.response;
  }
}

