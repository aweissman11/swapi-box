class SWRepository {
  randomNumber = () => {
    const rndm = Math.floor(Math.random() * Math.floor(6))
    return rndm
  }

  getMovieText = async () => {
    console.log('getting movie text');
    const url = 'https://swapi.co/api/films/';
    const uncleanMovies = await this.fetchCall(url);
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

    // const response = await fetch(url);
    const uncleanItemList = await this.fetchCall(url)




    const itemList = await this.cleanItemList(page, uncleanItemList)
    return itemList
  }

  cleanItemList = async (page, uncleanItemList) => {
    let cleanList;
    switch(page) {
      case('people') :
        cleanList = await this.cleanPeople(uncleanItemList.results);
        return cleanList;
      case('vehicles') :
        console.log('vehicles:', page);
        break;
      case('planets') :
        console.log('planets:', page);
        break;
    }
    return cleanList
  }

  cleanPeople = (uncleanPeople) => {
    const speciesPromises = uncleanPeople.map( async (person) => {
      const species = await this.fetchCall(...person.species);
      const homeworld = await this.fetchCall(person.homeworld);

      return ({
        name: person.name,
        species: species.name,
        homeworld: homeworld.name,
        popHome: homeworld.population
      })
    })
    return Promise.all(speciesPromises)
  }




  fetchCall = async (url) => {
    const response = await fetch(url);
    const jason = await response.json();

    return jason
  }

}
export default SWRepository;