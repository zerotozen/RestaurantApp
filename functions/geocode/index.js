//import locations as locationsMock
const { locations: locationsMock } = require("./geocode.mock");
const url = require("url");

module.exports.geocodeRequest = (request, response) => {
  const { city } = request.query;
  const locationMock = locationsMock[city.toLowerCase()];

  response.json(locationMock);
};
