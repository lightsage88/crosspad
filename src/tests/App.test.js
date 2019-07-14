import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {shallow, mount} from 'enzyme';
import { exportAllDeclaration, jsxEmptyExpression } from '@babel/types';




it('renders without crashing', () => {
const context = {
  buttonBeingHovered: false,
  carouselDirection: null,
  carouselIndex: 0,
  gameData : {},
  isLoading: false,
  loaderImage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fknowledge.wharton.upenn.edu%2Fwp-content%2Fuploads%2F2018%2F08%2Fhiddenfees.jpg&imgrefurl=https%3A%2F%2Fknowledge.wharton.upenn.edu%2Farticle%2Fhidden-costs-hurting-middle-class%2F&docid=kafwPtD8tAAEZM&tbnid=ZyB-Q9OCM3H4kM%3A&vet=10ahUKEwjul52uwKTjAhUTK30KHWVqCHkQMwh-KAEwAQ..i&w=1024&h=440&bih=932&biw=1853&q=fees&ved=0ahUKEwjul52uwKTjAhUTK30KHWVqCHkQMwh-KAEwAQ&iact=mrc&uact=8',
  noGameSet: [],
  noGraphSet: [],
  relatedGames: [],
  searchNoticeImages: [],
  searchOptions: [],
  searchValue: '',
  typingTimer : null,
  searchBarInputBarRef: jest.fn(),
  actions: {
      handleCarouselSelect: jest.fn(),
      handleTypingChange: jest.fn(),
      hoverIntoButton: jest.fn(),
      playSound: jest.fn(),
      updateSearchValue: jest.fn(),
      searchDatabaseForGame: jest.fn(),
      searchForSpecificGame: jest.fn()
}
};
 const wrapper = shallow(<App />, {context})
 console.log(context);
 expect(wrapper.hasClass('App')).toBe(true);
});



