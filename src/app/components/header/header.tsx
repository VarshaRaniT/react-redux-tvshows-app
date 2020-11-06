import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchBar from '../commonComponents/searchBar/searchBar'
import { Link } from 'react-router-dom';
import TvIcon from '@material-ui/icons/Tv';

export interface HeaderComponentProps {
    rest: any
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ rest }) => {
    return (
        <React.Fragment>
            <AppBar className="header__wrapper header_background" position="fixed">
                <Toolbar className="navlink__wrap">
                    <TvIcon/>
                    <Link className="menu__link" color="initial" to="/">
                     Tv Shows
                    </Link>
                    <SearchBar {...rest} />
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default HeaderComponent;
