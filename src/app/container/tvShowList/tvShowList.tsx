import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { RootState } from '../../reducers/state';
import { TvShowProps, TvShowState } from '../../models';
import { getTvShowList } from '../../actions/tvShowAction';
import { fetchTvShowList } from "../../data/api/tvShowList";
import { Link } from "react-router-dom";
import DetailedCard from "../../components/searchCard/searchCard"
// import material
import { makeStyles, Grid, MenuItem, FormControl, Select } from '@material-ui/core';
import CardComponent from "./../../components/commonComponents/card/card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export interface TvShowListUIProps extends React.Component<TvShowProps, TvShowState> {
    tvshowlist: any
    getTvShowList: (tvshowlist: any) => void;
    tvshow: any,
    searchlist: any,
}
// component style
const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        marginTop: "90px"
    },
    button: {
        display: 'block',
    },
    formControl: {
        minWidth: 160,
    },
    textCenter: {
        textAlign: 'left'
    }
}));
const TvShowListUI: React.FC<TvShowListUIProps> = ({ tvshowlist, getTvShowList, searchlist }) => {
    // set genres count and open dropdown using hook
    const [genres, setGenres] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event: any) => {
        setGenres(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    // fecthing tv show list
    useEffect(() => {
        fetchTvShowList(getTvShowList);
    }, [searchlist])

    // filters genres type
    const genresMap: { [key: string]: any } = {
    };
    tvshowlist.forEach((e: any) => {
        e.genres.forEach((g: any) => {
            genresMap[g] = true;
        })
    })
    //  filter tv show list on the basis of genres
    let filteredAction: any[] = []
    if (genres === "") {
        filteredAction = tvshowlist;
    }
    else {
        tvshowlist.forEach((e: any) => {
            if (e.genres.includes(genres)) {
                filteredAction.push(e);
            }
        });
    }
    // sorting tv show list
    let selectedTvShow;
    if (genres === '') {
        selectedTvShow = tvshowlist;
    } else {
        selectedTvShow = filteredAction;
    }
    let sortedArray = selectedTvShow.sort((a: any, b: any) => {
        return b.rating.average - a.rating.average;
    })
    const classes = useStyles();
    return (
        // render component
        <div className={classes.root}>
            {searchlist.length === 0 ? <div>
                <div className="custom__container__spacing light__black__bck">
                    <div className="genres__type">{genres === '' ? <h3>All TV Shows</h3> : <h3>{genres}</h3>}</div>
                    <FormControl className={classes.formControl}>
                        {/* <InputLabel id="genres">Select Genres</InputLabel> */}
                        <Select className={classes.textCenter} displayEmpty
                            labelId="genres" id="genres" open={open} onClose={handleClose} onOpen={handleOpen}
                            value={genres}
                            onChange={handleChange}
                        >
                            {/* create select menu for genres */}
                            <MenuItem value="">{"All TV Shows"}</MenuItem>
                            {Object.keys(genresMap).map((value: any, i: number) => <MenuItem key={value} value={value}>{value}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>
                <Carousel swipeable={false} centerMode={true}
                    draggable={false} responsive={responsive} containerClass="show__container__wrapper custom__container__spacing">
                    {sortedArray.map((value: any) => (
                        <Grid key={value.id} className="card__wrap">
                            <Link to={`/tvshow-detailed/${value.id}`}  >
                                <CardComponent tvshow={value} />
                            </Link>
                        </Grid>
                    ))}
                </Carousel>
            </div> : <Carousel swipeable={false} centerMode={true}
                draggable={false} responsive={responsive} containerClass="show__container__wrapper custom__container__spacing">
                    {searchlist.map((value: any) => (
                        <Grid key={value.show.id} className="card__wrap">
                                <DetailedCard carddata={value} />
                        </Grid>
                    ))}
                </Carousel>}
        </div>
    )
}
const mapStateToProps = (state: RootState) => ({
    tvshowlist: state.tvshow.tvshowlist,
    searchlist: state.tvshow.searchlist
});
const mapDispatchToProps = (dispatch: React.Dispatch<any>) => ({
    getTvShowList: (tvshowlist: any) => {
        dispatch(getTvShowList(tvshowlist));
    },
});
// connect function used for making bridge between component and redux store
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TvShowListUI);
