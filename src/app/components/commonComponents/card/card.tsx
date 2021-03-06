import React from 'react';
import { makeStyles, CardContent, Typography, Card, CardActionArea } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import thumbnailImage from './../../../../assets/images/thumnail.jpg';
export interface CardComponentProps {
    tvshow: any
}
// component style
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: "90px"
    },
    media: {
        maxHeight: 200,
        backgroundSize: 'cover',
        backgroundPosition: '0 0'
    },
    textCenter: {
        textAlign: "center"
    },
    cardContent: {
        padding: "0"
    }
}));
const CardComponent: React.FC<CardComponentProps> = ({ tvshow }) => {
    const classes = useStyles();
    return (
        <Card className={`${classes.textCenter} card__wrapper`}>
            <CardActionArea className="card_structure" >
                <div className="img__wrapper__main">{tvshow.image.original ? <img className="border__frame" src={tvshow.image.original} alt="tv show" /> : <img className="border__frame w-90" src={thumbnailImage} alt="dummy thumbnail image" />}</div>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom component="h6" className="genres__name">
                        {tvshow.name}
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p" className="desc__text rating justify__center">
                        {tvshow.rating.average ? <StarIcon className="custom__icon" /> : "No Rating"}  {tvshow.rating.average}
                    </Typography>
                    <div className="geners_type__wrap">
                        {tvshow.genres.map((value: any, index: number) =>
                            <Typography key={index} gutterBottom component="span" className="geners_type">
                                {value}
                            </Typography>
                        )}
                    </div>
                </CardContent>

            </CardActionArea>
        </Card>
    );
}

export default CardComponent;