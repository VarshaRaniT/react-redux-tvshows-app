import React, { useEffect } from 'react';
import { connect } from "react-redux";
import {Link} from "react-router-dom"
import { RootState } from '../../reducers/state';
import { TvShowProps, TvShowState } from '../../models';
import { getTvShowDetailed } from '../../actions/tvShowAction';
import { fetchDetailedTvShow } from "../../data/api/detailedTvShow";
import { makeStyles, Grid, CardContent, Typography, Card, Container } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import BackIcon from '@material-ui/icons/ArrowBack'
import DetailedCard from "../searchCard/searchCard";
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
export interface TvShowDetailedComponentProps extends React.Component<TvShowProps, TvShowState> {
    tvshowdetailedlist: any;
    getTvShowDetailed: (tvshowdetailedlist: any) => void;
    searchlist: any,
}
// component style
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: "90px",
        marginBottom: "40px",
    },
    media: {
        height: 360,
        backgroundSize: 'contain',
        backgroundPosition: "center center",
    },
    pb0: {
        paddingBottom: "0"
    },

}));
const TvShowDetailedComponent: React.FC<TvShowDetailedComponentProps> = ({ searchlist, tvshowdetailedlist, getTvShowDetailed, }) => {
    // fetch data list
    useEffect(() => {
        fetchDetailedTvShow(getTvShowDetailed);
    }, [])
    const classes = useStyles();

    return (
        // render component
        <div className="detailed__component__wrap">
            <div className={classes.root}>
                {searchlist.length === 0 ? <Container>
                    <Grid container spacing={3} key={tvshowdetailedlist.id}>
                        <Card className="custom__card__wrap">
                            <Link to="/"><Grid><BackIcon color="secondary"/></Grid></Link>
                            <Grid container spacing={3} item xs={12}>

                                <Grid item xl={3} lg={5} md={6} sm={12} xs={12}>
                                    <div className="img__wrapper">{tvshowdetailedlist.image ? <img className="border__frame" src={tvshowdetailedlist.image && tvshowdetailedlist.image.original} alt="tv show" /> : "Image not found"}</div>
                                </Grid>

                                <Grid item xl={9} lg={7} md={6} sm={12} xs={12} className="content__wrapper">
                                    <CardContent className={`${classes.pb0}`}>
                                        <Typography gutterBottom variant="h4" component="h2" className="main__heading">
                                            {tvshowdetailedlist.name}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="h2">
                                            Rating
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className="desc__text__detailed rating">
                                            {tvshowdetailedlist.rating && tvshowdetailedlist.rating.average ? <StarIcon className="custom__icon" /> : "No Rating"}{tvshowdetailedlist.rating && tvshowdetailedlist.rating.average}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="h2">
                                            Language
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className="desc__text__detailed">
                                            {tvshowdetailedlist.language}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="h2">
                                            Summary
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className="desc__text__detailed">
                                            {tvshowdetailedlist.summary && tvshowdetailedlist.summary.replace(/(<([^>]+)>)/ig, "")}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="h2">
                                            Official Site
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className="desc__text__detailed">
                                            <a className="custom_link" href={tvshowdetailedlist.officialSite} target="_blank">Official Link</a>
                                        </Typography>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid></Container> : <Carousel swipeable={false} centerMode={true}
                        draggable={false} responsive={responsive} containerClass="show__container__wrapper custom__container__spacing">
                        {searchlist.map((value: any) => (
                            <Grid key={value.show.id} className="card__wrap">
                                <DetailedCard carddata={value} />
                            </Grid>
                        ))}
                    </Carousel>}
            </div>
        </div>
    )
}
const mapStateToProps = (state: RootState) => ({
    tvshowdetailedlist: state.tvshow.tvshowdetailedlist,
    searchlist: state.tvshow.searchlist
});
const mapDispatchToProps = (dispatch: React.Dispatch<any>) => ({
    getTvShowDetailed: (tvshowdetailedlist: any) => {
        dispatch(getTvShowDetailed(tvshowdetailedlist));
    },
});
// connect function used for making bridge between component and redux store
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TvShowDetailedComponent);
