import React from 'react';
import { makeStyles, CardContent, Typography, Card, CardActionArea } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
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
        height: 200,
        backgroundSize: 'cover',
        backgroundPosition: '0 0'
    },
    textCenter: {
        textAlign: "center"
    },
    cardContent: {
        padding: "10px 6px"
    }
}));
const CardComponent: React.FC<CardComponentProps> = ({ tvshow }) => {
    const classes = useStyles();
    return (
        <Card className={`${classes.textCenter} card__wrapper`}>
            <CardActionArea className="card_structure" >
                <div className="img__wrapper__main"> <img src={tvshow.image && tvshow.image.original} alt="tv show" /></div>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom component="h6" className="genres__name">
                        {tvshow.name}
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p" className="desc__text rating justify__center">
                       <StarIcon className="custom__icon" /> {tvshow.rating.average}
                    </Typography>
                    {tvshow.genres.map((value: any, index: number) =>
                        <Typography key={index} gutterBottom component="span" className="geners_type">
                            {value}
                        </Typography>
                    )}
                </CardContent>

            </CardActionArea>
        </Card>
    );
}

export default CardComponent;