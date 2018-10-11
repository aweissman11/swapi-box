import { getMovieText, randomNumber, cleanMovieText, getItemList, cleanItemList, cleanPeople, fetchCall } from './helper.js';

describe('helper.js', () => {
  describe('fetchCall', () => {
    let mockcleanMovieText
    let mockmovieObject
    let mockURL

    beforeEach(() => {
      mockmovieObject = { results: [
        { title: 'StarTrek', date: 'December 31 1999', opening: 'Space: the final frontier.  These are the voyages of the starship Enterprise.  Its five-year mission: to explore strange new worlds. To seek out new life and new civilizations.  To boldly go where no man has gone before!', somethingElse: 'info that will later be removed from this object'},

        { title: 'A Tale of Two Cities', date: 'January 1 2000', opening: 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we', somethingElse: 'info that will be taken out of this object'}
      ] }
      mockcleanMovieText = jest.fn()

      mockURL = 'https://swapi.co/api/films/'

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ ok: true, json: () => Promise.resolve(mockmovieObject)}))

    })

    it('should call fetch with the correct parameters', async () => {
      //set-up
      const expected = 
        'https://swapi.co/api/films/';
      //execution
      await fetchCall(mockURL)
      //expectation
      expect(window.fetch).toHaveBeenCalledWith(expected)
    })

    it('should retrieve movie information if status is ok', async () => {
      //set-up
      const expected = mockmovieObject
      //execution
      const result = await fetchCall(mockURL)
      //expectation
      expect(result).toEqual(expected)
    })

    it('should throw an error if status is not okay', async () => {
      //set-up
      const expected = Error('Status is not okay')
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: false, json: () => Promise.resolve(mockmovieObject)}))
      //execution && expectation
      await expect(fetchCall(mockURL)).rejects.toEqual(expected)
    })

  })

  describe('getMovieText', () => {
    let mockcleanMovieText
    let mockuncleanMovies
    // let mockrandomNumber

    beforeEach(() => {
      mockuncleanMovies = [
        { title: 'StarTrek', date: 'December 31 1999', opening: 'Space: the final frontier.  These are the voyages of the starship Enterprise.  Its five-year mission: to explore strange new worlds. To seek out new life and new civilizations.  To boldly go where no man has gone before!', somethingElse: 'info that will later be removed from this object'},

        { title: 'A Tale of Two Cities', date: 'January 1 2000', opening: 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we', somethingElse: 'info that will be taken out of this object'}
      ]
      mockcleanMovieText = jest.fn()

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ ok: true, json: () => Promise.resolve(mockuncleanMovies)}))
    })

    it('should throw an error if fetch fails', async () => {
      //set-up
      //execution
      //expectation
    })

  })

  describe('cleanMovieText', () => {
    let mockuncleanMovies
    let mockcleanMovies

    beforeEach(() => {
      mockuncleanMovies = [
        { title: 'StarTrek', date: 'December 31 1999', opening: 'Space: the final frontier.  These are the voyages of the starship Enterprise.  Its five-year mission: to explore strange new worlds. To seek out new life and new civilizations.  To boldly go where no man has gone before!', somethingElse: 'info that will later be removed from this object'},

        { title: 'A Tale of Two Cities', date: 'January 1 2000', opening: 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we', somethingElse: 'info that will be taken out of this object'}
      ]

      mockcleanMovies = [
        { title: 'StarTrek', date: 'December 31 1999', opening: 'Space: the final frontier.  These are the voyages of the starship Enterprise.  Its five-year mission: to explore strange new worlds. To seek out new life and new civilizations.  To boldly go where no man has gone before!'},

        { title: 'A Tale of Two Cities', date: 'January 1 2000', opening: 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we'}
      ]

    })

    it('should return the same number of movies', () => {
      //set-up
      //execution
      //expectation
    })

    it('should remove unnecessary information from the movies', () => {
      //set-up
      //execution
      //expectation
    })
    
  })

})

//NOTE TO DEV TEAM:  remember to add in proptypes to relevant components!!!!