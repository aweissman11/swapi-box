import React from 'react';
import { shallow, mount } from 'enzyme';

import Card from './card';

describe('Card', () => {

  let isFavorited;
  let stats;
  let mockHandleFavorites;
  let wrapper;

  beforeEach(() => {
    isFavorited = false;
    stats = {
      Name: 'Aaron',
      Species: 'Human',
      Homeworld: 'Earth',
      Population: 7000000000
    };
    mockHandleFavorites = jest.fn();

    wrapper = shallow(<Card stats={stats} handleFavorites={mockHandleFavorites} />);
    
    
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should pass in the stats on favoriteThis', () => {
    wrapper = mount(<Card stats={stats} handleFavorites={mockHandleFavorites} />);
    console.log(wrapper.find('.favorite'));
    // console.log('wrapper.find():', wrapper.find('.favorite'));
    // wrapper.find('favorite').simulate('click');
    // expect(mockHandleFavorites).toBeCalled();
  });
  
  it('should start as not being favorited', () => {
    expect(wrapper.instance().state.isFavorited).toBe(false);
  });

});
