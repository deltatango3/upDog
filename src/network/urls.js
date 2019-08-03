const baseUrl = `https://api.petfinder.com/v2`;

const urls = {
  pets: `${baseUrl}/animals`,
  pet: id => `${baseUrl}/animals/${id}`
};

export default urls;
