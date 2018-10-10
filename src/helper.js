class SWRepository {
  constructor() {

  }

  randomNumber = () => {
    const rndm = Math.floor(Math.random() * Math.floor(6))
    console.log(rndm)
    return rndm
  }

  getMovieText = async () => {
    const url = 'https://swapi.co/api/films/';
    const response = await fetch(url);
    const uncleanMovies = await response.json();
    const movies = await this.cleanMovieText(uncleanMovies.results);
    return movies[this.randomNumber()]
  }

  cleanMovieText = (uncleanMovies) => {
   const cleanMovies = uncleanMovies.map(movie => {
    return ({title: movie.title, date: movie.release_date, opening: movie.opening_crawl})
    });
   return cleanMovies
  }

}
export default SWRepository;