class SWRepository {
  constructor() {

  }

getMovieText = async () => {
  const url = 'https://swapi.co/api/films/';
  const response = await fetch(url);
  const uncleanMovies = await response.json();
  console.log(uncleanMovies);
  const movies = await this.cleanMovieText(uncleanMovies.results);
  return movies
}

cleanMovieText = (uncleanMovies) => {
 const cleanMovies = uncleanMovies.map(movie => {
  return ({title: movie.title, date: movie.release_date, opening: movie.opening_crawl})
  });
 console.log(cleanMovies);
 return cleanMovies;
}

}
export default SWRepository;