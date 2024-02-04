const key = "1268a1fc71257fb63b01c33c4c42e0ed";
const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,

  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=en-US`,
  requestHorror: ` https://api.themoviedb.org/3/discover/movie?api_key=${key}&=XXXXX&with_genres=27`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};
export default requests;
