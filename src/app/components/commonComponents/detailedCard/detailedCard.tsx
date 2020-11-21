
import React from 'react';
import { makeStyles, Grid, CardContent, Typography, Card, Container } from '@material-ui/core';
import { Link } from "react-router-dom";
export interface DetailedCardProps {

}
export interface DetailedCardProps {
    carddata: any;
}
// component style
const useStyles = makeStyles(() => ({
    media: {
        height: 200,
        backgroundSize: 'contain',
        backgroundPosition: "center center",
    },
    pb0: {
        paddingBottom: "0"
    },
    cardContent: {
        padding: "10px 6px"
    }

}));
const DetailedCard: React.FC<DetailedCardProps> = ({ carddata }) => {
    const classes = useStyles();
    console.log(carddata, "fdjhfjd hdfjhdf hdfhjd")
    return (
        // render component
            <Card className="card__wrapper">
                    <div className="img__wrapper__main"> <img src={carddata.show.image && carddata.show.image.medium} alt="tv" /></div>
                    <CardContent className={`${classes.pb0} ${classes.cardContent} content__wrapper`}>
                        <Typography gutterBottom variant="h6" component="h6" className="genres__name">
                            {carddata.show.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className="desc__text__detailed">
                            {carddata.show.language}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className="desc__text__detailed text__truncate">
                            {carddata.show.summary && carddata.show.summary.replace(/(<([^>]+)>)/ig, "")}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className="desc__text__detailed">
                            {carddata.show.url ? <a className="custom_link" href={carddata.show.url} target="_blank">Official Link</a> : null}
                        </Typography>
                    </CardContent>
            </Card>
    )
}

export default DetailedCard
