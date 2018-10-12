  export const fetchCall = async (url) => {
      const response = await fetch(url);
    if (response.ok) {
      const responseToJSON = await response.json();
      return responseToJSON
    } else {
      throw new Error('Status is not okay')
   }
  }

  export const randomNumber = () => {
    const rndm = Math.floor(Math.random() * Math.floor(6))
    return rndm
  }

  export const getMovieText = async () => {
    const url = 'https://swapi.co/api/films/';
    const uncleanMovies = await fetchCall(url);
    const movies = await cleanMovieText(uncleanMovies.results);
    return movies[randomNumber()]
  }

  export const cleanMovieText = (uncleanMovies) => {
     const cleanMovies = uncleanMovies.map(movie => {
    return ({title: movie.title, date: movie.release_date, opening: movie.opening_crawl})
    });
   return cleanMovies
  }

  export const getItemList = async (page, pageNumber = 1) => {
    const fetchInfo = `${page}/?page=${pageNumber}`
    const url = `https://swapi.co/api/${fetchInfo}`
    const uncleanItemList = await fetchCall(url)
    const itemList = await cleanItemList(page, uncleanItemList)
    return itemList
  }

  export const cleanItemList = async (page, uncleanItemList) => {
    let cleanList;
    switch(page) {
      case('people') :
        cleanList = await cleanPeople(uncleanItemList.results);
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

  export const cleanPeople = (uncleanPeople) => {
    const speciesPromises = uncleanPeople.map( async (person) => {
      const species = await fetchCall(...person.species);
      const homeworld = await fetchCall(person.homeworld);

      return ({
        name: person.name,
        species: species.name,
        homeworld: homeworld.name,
        popHome: homeworld.population
      })
    })
    return Promise.all(speciesPromises)
  }

