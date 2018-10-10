class SWRepository {
  constructor() {

  }

getMovieText = async () => {
  const url = 'https://swapi.co/api/films/';
  const response = await fetch(url);
  const movieInformation = await response.json();
  return movieInformation
}

// cleanMovieText = () => {}
//  const unclean = this.getMovieText;
// 
}
export default SWRepository;