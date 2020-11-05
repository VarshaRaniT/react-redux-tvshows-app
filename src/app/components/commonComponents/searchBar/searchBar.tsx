import React, { useState } from 'react';
import { connect } from "react-redux";
import { RootState } from '../../../reducers/state';
import { TvShowProps, TvShowState } from '../../../models';
import { getTvShowDetailed } from '../../../actions/tvShowAction';
import { fetchSearchTvShow } from "../../../data/api/searchTvShow";
import { getSearchTvShow } from '../../../actions/tvShowAction';
import { makeStyles, Grid } from '@material-ui/core';
import ButtonComponent from "../button/button"
import InputComponent from "../input/input"

export interface SearchBarProps extends React.Component<TvShowProps, TvShowState> {
    tvshowdetailedlist: any;
    searchlist:any
    getTvShowDetailed: (tvshowdetailedlist: any) => void;
    getSearchTvShow: (searchlist: any) => void;
    // btnText:string;
}
// component style
const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));
const SearchBar: React.FC<SearchBarProps> = ({getTvShowDetailed, getSearchTvShow }) => {
    const [count, getSearch] = useState('');
    const onSearchChange = (e: any) => {
        getSearch(e.target.value)
        if(e.target.value===''){
            window.location.reload(false);
        }
    }
    const onSearchClick = () => {
        if (count !== '') {
            fetchSearchTvShow(getSearchTvShow, count);
        }
        else window.location.reload(false);
        // history.push('/search-result');
        getSearch('')
    }
    // console.log(count, "clear cound value")
    const classes = useStyles();
    return (
        // Render search component
        <div className={classes.root}>
            <Grid container item xs={12} className="main__search__wrap">
                <div className="search__show__wrap">
                    <InputComponent fieldType={"text"} fieldlabel={"Search"} onSearchChild={onSearchChange} />
                    <ButtonComponent btnText={"Search"} onSearchChildClick={onSearchClick} />
                </div>
            </Grid>
        </div>
    )
}
const mapStateToProps = (state: RootState) => ({
    searchlist: state.tvshow.searchlist,
});
const mapDispatchToProps = (dispatch: React.Dispatch<any>) => ({
    getTvShowDetailed: (tvshowdetailedlist: any) => {
        dispatch(getTvShowDetailed(tvshowdetailedlist));
    },
    getSearchTvShow: (searchlist: any) => {
        dispatch(getSearchTvShow(searchlist));
    },
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);
