const { mocks, addMockImage } = require("./mock");
const url = require("url");

module.exports.placesRequest = (request, response) => {
  const { location } = request.query;

  const data = mocks[location];
  if (data) {
    data.results = data.results.map(addMockImage);
  }

  response.json(data);
};
