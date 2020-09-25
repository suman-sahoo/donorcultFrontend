import React from 'react';
import {TopHeader,MiddleHeader,Navigation} from './index';

const Header = (props) =>{
  return (
    <header>
            <TopHeader />
            <MiddleHeader />
            <Navigation />
    </header>
    );
}
export default Header;