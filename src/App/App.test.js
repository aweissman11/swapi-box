import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let mockStats;
  let wrapper;

  beforeEach( ()=>{
     mockStats = [
      { name: 'bob', species: 'human', homeworld: 'Earth', popHome: '500'},
      { name: 'bill', species: 'droid', homeworld: 'saturn', popHome: '1500'}
      ];
    wrapper = shallow(<App />)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should remove an item from favorites if clicked as no longer being a favorite', () => {
    const expected = [
      { name: 'bob', species: 'human', homeworld: 'Earth', popHome: '500'}
      ];
    localStorage.setItem('favorites', JSON.stringify(mockStats));
    wrapper.instance().handleFavorites({name: 'bill', species: 'droid', homeworld: 'saturn', popHome: '1500'});
    console.log(localStorage.getItem('favorites'));
    // const getItem = localStorage.getItem('favorites');
    // expect(JSON.parse(getItem)).toEqual(expected)

  }) 
  // 'movies state begins as an empty array, and is set upon calling componentDidMount'

  // 'movies state is updated to contain an array of objects with cleaned data'
})