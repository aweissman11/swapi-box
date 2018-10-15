import { getMovieText, randomNumber, cleanMovieText, getItemList, cleanItemList, cleanPeople, getSpecies, getWorlds, fetchCall, cleanVehicles } from './helper.js';


describe('helper.js', () => {
  describe('fetchCall', () => {
    let mockcleanMovieText;
    let mockmovieObject;
    let mockURL;

    beforeEach(() => {
      mockmovieObject = { results: [
        { title: 'StarTrek', date: 'December 31 1999', opening: 'Space: the final frontier.  These are the voyages of the starship Enterprise.  Its five-year mission: to explore strange new worlds. To seek out new life and new civilizations.  To boldly go where no man has gone before!', somethingElse: 'info that will later be removed from this object'},

        { title: 'A Tale of Two Cities', date: 'January 1 2000', opening: 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we', somethingElse: 'info that will be taken out of this object'}
      ] };
      mockcleanMovieText = jest.fn();

      mockURL = 'https://swapi.co/api/films/';

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ ok: true, json: () => Promise.resolve(mockmovieObject)}));

    });

    it('should call fetch with the correct parameters', async () => {
      //set-up
      const expected = 
        'https://swapi.co/api/films/';
      //execution
      await fetchCall(mockURL);
      //expectation
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('should retrieve movie information if status is ok', async () => {
      //set-up
      const expected = mockmovieObject;
      //execution
      const result = await fetchCall(mockURL);
      //expectation
      expect(result).toEqual(expected);
    });

    it('should throw an error if status is not okay', async () => {
      //set-up
      const expected = Error('Status is not okay');
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: false, json: () => Promise.resolve(mockmovieObject)}));
      //execution && expectation
      await expect(fetchCall(mockURL)).rejects.toEqual(expected);
    });
    
    // it('should throw an error if fetch fails', async () => {
    //   //set-up
    //   const expected = Error('API call failed')
    //   window.fetch = jest.fn().mockImplementation(() => Promise.reject('API call failed'))
    //   //execution && expectation
    //   await expect(fetchCall(mockURL)).rejects.toEqual(expected)
    // })
      
  });
    
  describe('cleanMovieText', () => {
    let mockuncleanMovies;
    // let mockrandomNumber
      
    beforeEach(() => {
      mockuncleanMovies = [
        { title: 'StarTrek', date: 'December 31 1999', opening: 'Space: the final frontier.  These are the voyages of the starship Enterprise.  Its five-year mission: to explore strange new worlds. To seek out new life and new civilizations.  To boldly go where no man has gone before!', somethingElse: 'info that will later be removed from this object'},
          
        { title: 'A Tale of Two Cities', date: 'January 1 2000', opening: 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we', somethingElse: 'info that will be taken out of this object'}
      ];
    });
    it('should return the same number of movies', () => {
      //set-up
      const expected = mockuncleanMovies.length;
      //execution
        
      let cleanMovies = cleanMovieText(mockuncleanMovies);
      //expectation
      expect(cleanMovies.length).toEqual(expected);
    });
      
    it('should remove unnecessary information from the movies', () => {
      //set-up
      const expected = ['title', 'date', 'opening'];
      //execution
      let cleanMovies = cleanMovieText(mockuncleanMovies);
      //expectation
      expect(Object.keys(cleanMovies[0])).toEqual(expected);
    });
      
  });
  describe('cleanItemList', () => {
    let mockUncleanItemList;
    let mockCleanItemList;

    beforeEach(() => {
        
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: true, json: () => Promise.resolve(mockUncleanItemList)}));
        
      mockUncleanItemList = {results: [
        { name: 'bob', species: 'human', homeworld: 'Earth', popHome: '500', somethingElse: 'info that will later be removed from this object', residents: []},

        { name: 'bill', species: 'droid', homeworld: 'saturn', popHome: '1500', somethingElse: 'info that will later be removed from this object', residents: []}
      ]};
      mockCleanItemList = [
        { name: 'bob', species: 'human', homeworld: 'Earth', popHome: '500'},

        { name: 'bill', species: 'droid', homeworld: 'saturn', popHome: '1500'}
      ];
    });

    it('should call the right function depending on the page-- people', async () => {
      const expected = Object.keys(mockCleanItemList);
      let cleanItem = await cleanItemList('people', mockUncleanItemList)
      expect(Object.keys(cleanItem)).toEqual(expected)
    });

    it('should call the right function depending on the page-- vehicles', async () => {
      const expected = ['Name', 'Model', 'Class', 'NumPassengers'];
      let cleanItem = await cleanItemList('vehicles', mockUncleanItemList)
      expect(Object.keys(cleanItem[0])).toEqual(expected)
    });

    it('should call the right function depending on the page-- planets', async () => {
      const expected = ['Name', 'Terrain', 'Population', 'Climate', 'Residents'];
      let cleanItem = await cleanItemList('planets', mockUncleanItemList)
      expect(Object.keys(cleanItem[0])).toEqual(expected)
    });

    it('should pass in the uncleanItemList.results to the cleaner', () => {
      //set-up
      

      //execution
      //expectation
    });

    it('should pass in the uncleanItemList.results to the cleaer', () => {
      //set-up
      //execution
      //expectation
    });

    it('should pass in the uncleanItemList.results to the cleaer', () => {
      //set-up
      //execution
      //expectation
    });
    //Test that the functions inside have been run a certain number of times.
    
  });

  // describe('randomNumber', () => {
    
  //   it('should return a randomNumber between 0 and 6', () => {
  //     //set-up
  //     const expected = (<= 0 && >= 6);
  //     //execution
  //     let rndm = Math.floor(Math.random() * Math.floor(6));
  //     //expectation
  //     expect(rndm).toBe(expected);
  //   });
      
  //   });
      
  // });

});
