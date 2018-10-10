class SWRepository {
  constructor() {

  }

  randomNumber = () => {
    const rndm = Math.floor(Math.random() * Math.floor(6))
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

  getItemList = async (page, pageNumber = 1) => {
    const fetchInfo = `${page}/?page=${pageNumber}`
    const url = `https://swapi.co/api/${fetchInfo}`

    const response = await fetch(url);
    const uncleanItemList = await response.json();
    const cards = await this.cleanItemList(page, uncleanItemList)

    return uncleanItemList
  }

  cleanItemList = (page, uncleanItemList) => {
    // switch(page)
    console.log(uncleanItemList)
    return uncleanItemList
  }

}
export default SWRepository;