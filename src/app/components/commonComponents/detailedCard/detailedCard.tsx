
import React from 'react';
import { makeStyles, Grid, CardContent, Typography, Card, Container } from '@material-ui/core';
import { Link } from "react-router-dom";
export interface DetailedCardProps {

}
export interface DetailedCardProps {
    carddata: []
}
// component style
const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        marginTop: "90px"
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
const DetailedCard: React.FC<DetailedCardProps> = ({ carddata }) => {
    const classes = useStyles();
    return (
        // render component
        <div className={classes.root}>
            <Container>
                <Grid container spacing={6}>
                    {carddata.map((value: any, index: number) => (
                        <Grid spacing={3} item xl={3} lg={4} md={6} sm={12} xs={12}>
                            <Card key={index}>
                                <Grid item xs={12}>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <div className="img__wrapper"> <img src={value.show.image && value.show.image.medium} alt="tv show"/></div>
                                    </Grid>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className="content__wrapper">
                                        <CardContent className={`${classes.pb0}`}>
                                            <Typography gutterBottom variant="h4" component="h2" >
                                                {value.show.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p" className="desc__text__detailed">
                                                {value.show.rating && value.show.rating.average}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p" className="desc__text__detailed">
                                                {value.show.language}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p" className="desc__text__detailed text__truncate">
                                                {value.show.summary && value.show.summary.replace(/(<([^>]+)>)/ig, "")}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p" className="desc__text__detailed">
                                                <Link className="custom_link" to={value.show.officialSite}  target="_blank">Official Link</Link>
                                            </Typography>
                                        </CardContent>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default DetailedCard
