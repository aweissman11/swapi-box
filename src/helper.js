class SWRepository {
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
      const response = await fetch(...person.species);
      // const worldResponse = await fetch(...person.homeworld);
      const species = await response.json();

      return ({
        name: person.name,
        species: species.name,
        homeworld: person.homeworld,
        popHome: 'Home Population'
      })
    })

    // const worldPromises = worldStart.map( async (person) => {
      // const response = await fetch(...person.homeworld);
      // const homeworld = await response.json();
    //   return ({
    //     ...person,
    //     homeworld: homeworld.name,
    //     popHome: homeworld.population
    //   })
    // })

    return Promise.all(speciesPromises)
  }

}
export default SWRepository;