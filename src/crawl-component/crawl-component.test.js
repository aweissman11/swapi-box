import React from 'react';
import { shallow } from 'enzyme';

import CrawlComponent from './crawl-component';

describe('CrawlComponent', () => {
  it('should match the snapshot', () => {
    let movie = { title: 'StarTrek', date: 'December 31 1999', opening: 'Space: the final frontier.  These are the voyages of the starship Enterprise.  Its five-year mission: to explore strange new worlds. To seek out new life and new civilizations.  To boldly go where no man has gone before!', somethingElse: 'info that will later be removed from this object'};
    const wrapper = shallow(<CrawlComponent movie={movie}/>);
    expect(wrapper).toMatchSnapshot();
  });
});