import React from 'react';
import { shallow, mount } from 'enzyme';

import CardsContainer from './cards-container';
import * as Helper from '../helper';

describe('CardsContainer', () => {

  let currentPage;
  let handleFavorites;
  let wrapper;
  let mockList;
   
  beforeEach(() => {
    handleFavorites = jest.fn();
    currentPage = 'people';

    wrapper = shallow(<CardsContainer 
      getItemList={Helper.getItemList}
      currentPage={currentPage}
      handleFavorites={handleFavorites}
    />);

    mockList = [
      {
        Name: 'Luke',
        Species: 'Human',
        Homeworld: 'Earth',
        Population: 7000000000
      },
      {
        Name: 'Jimbo',
        Species: 'Dinosaur',
        Homeworld: 'Earth',
        Population: 56789
      }
    ];

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ 
      ok: true, json: () => Promise.resolve(mockList)
    }));
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should start with pageRepo in state', () => {
    wrapper = mount(<CardsContainer 
      getItemList={Helper.getItemList}
      currentPage={currentPage}
      handleFavorites={handleFavorites}
    />);
    expect(wrapper.instance().state.pageRepo).toEqual([]);
  });
  
  it('should list all the cards', () => {
    wrapper = mount(<CardsContainer 
      getItemList={Helper.getItemList}
      currentPage={currentPage}
      handleFavorites={handleFavorites}
    />);
    expect(wrapper.instance().state.pageRepo).toEqual([]);
    wrapper.setState({
      pageRepo: mockList
    });
    expect(wrapper.instance().listCards().length).toEqual(2);
  });
}); 

