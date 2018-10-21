import React from 'react';
import { shallow } from 'enzyme';

import Navigation from './navigation';

describe('Navigation', () => {
  let wrapper;
  let mockChangePage;

  beforeEach(() => {
    mockChangePage = jest.fn();
    wrapper = shallow(<Navigation 
      totalFavorites={3}
      currentPage='people'
      changePage={mockChangePage}
    />);
  });


  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call home changePage when clicked', () => {
    wrapper.find('.nav-link-home').simulate('click');
    expect(mockChangePage).toHaveBeenCalledWith('home');
  });

  it('should call people changePage when clicked', () => {
    wrapper.find('.nav-link-people').simulate('click');
    expect(mockChangePage).toHaveBeenCalledWith('people');
  });

  it('should call planets changePage when clicked', () => {
    wrapper.find('.nav-link-planets').simulate('click');
    expect(mockChangePage).toHaveBeenCalledWith('planets');
  });

  it('should call vehicles changePage when clicked', () => {
    wrapper.find('.nav-link-vehicles').simulate('click');
    expect(mockChangePage).toHaveBeenCalledWith('vehicles');
  });

  it('should call favorites changePage when clicked', () => {
    wrapper.find('.nav-link-favorites').simulate('click');
    expect(mockChangePage).toHaveBeenCalledWith('favorites');
  });

});