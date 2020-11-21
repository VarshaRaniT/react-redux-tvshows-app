
import React from 'react';
import { makeStyles, CardContent, Typography, Card} from '@material-ui/core';
import thumbnailImage from'./../../../assets/images/thumnail.jpg';
export interface DetailedCardProps {

}
export interface DetailedCardProps {
    carddata: any;
}
// component style
const useStyles = makeStyles(() => ({
    media: {
        maxHeight: 200,
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
    return (
        // render component
            <Card className="card__wrapper">
                    <div className="img__wrapper__main">{carddata.show.image?<img src={carddata.show.image && carddata.show.image.medium} alt="tv show image" />:<img src={thumbnailImage} alt="dummy thumbnail image" />}</div>
                    <CardContent className={`${classes.pb0} ${classes.cardContent}`}>
                        <Typography gutterBottom variant="h6" component="h6" className="genres__name">
                            {carddata.show.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className="lang p-0">
                            {carddata.show.language}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className="desc__text__detailed text__truncate">
                            {carddata.show.summary && carddata.show.summary.replace(/(<([^>]+)>)/ig, "")}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className="p-0">
                            {carddata.show.url ? <a className="custom_link" href={carddata.show.url} target="_blank">Official Link</a> : null}
                        </Typography>
                    </CardContent>
            </Card>
    )
}

export default DetailedCard
