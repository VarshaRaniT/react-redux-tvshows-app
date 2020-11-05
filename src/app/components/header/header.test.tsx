import React from 'react';
import { shallow } from 'enzyme';
import HeaderComponent from './header';
import {Link} from 'react-router-dom';
let rest:any
let wrapped = shallow(<HeaderComponent {...rest}></HeaderComponent>);

describe('Hearder', () => {
  it('renders the Header link', () => { 
    expect(wrapped.find('.menu__link').text()).toEqual('Tv Show App');
    expect(wrapped.containsMatchingElement(<Link to="/">Tv Show App</Link>)).toBe(true);
  });
});