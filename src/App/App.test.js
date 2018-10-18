import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';


describe('App', () => {
  let mockStats;
  let wrapper;

  beforeEach( ()=>{
    mockStats = [
      { Name: 'bob', species: 'human', homeworld: 'Earth', popHome: '500'},
      { Name: 'bill', species: 'droid', homeworld: 'saturn', popHome: '1500'}
    ];
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    const router = (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const div = document.createElement('div');
    ReactDOM.render(router, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should remove an item from favorites if clicked as no longer being a favorite', () => {
    const expected = [
      { Name: 'bob', species: 'human', homeworld: 'Earth', popHome: '500'}
    ];
    localStorage.setItem('favorites', JSON.stringify(mockStats));
    wrapper.instance().handleFavorites({Name: 'bill', species: 'droid', homeworld: 'saturn', popHome: '1500'});
    const getItem = localStorage.getItem('favorites');
    expect(JSON.parse(getItem)).toEqual(expected);

  });

  it('should add an item to favorites if clicked as a favorite', () => {
    const expected = [
      { Name: 'bob', species: 'human', homeworld: 'Earth', popHome: '500'},
      { Name: 'bill', species: 'droid', homeworld: 'saturn', popHome: '1500'},
      { Name: 'sara', species: 'unknown', homeworld: 'Pluto-- yes according to natives it is a planet', popHome: '14'}
    ];
    localStorage.setItem('favorites', JSON.stringify(mockStats));
    wrapper.instance().handleFavorites({ Name: 'sara', species: 'unknown', homeworld: 'Pluto-- yes according to natives it is a planet', popHome: '14'});
    const getItem = localStorage.getItem('favorites');
    expect(JSON.parse(getItem)).toEqual(expected);
    
  });

  // 'movies state begins as an empty array, and is set upon calling componentDidMount'

  // 'movies state is updated to contain an array of objects with cleaned data'
});