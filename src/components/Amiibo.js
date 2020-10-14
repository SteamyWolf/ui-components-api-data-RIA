import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useAmiiboContext } from '../contexts/AmiiboContext';


const useStyles = makeStyles({
    root: {
      maxWidth: 445,
      margin: 10
    },
    action: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
    },
    media: {
      height: 200,
      width: '100%',
      backgroundSize: 'contain'
    },
    ul: {
        margin: '0 auto',
        paddingLeft: 0,
        maxWidth: 1200,
        listStyleType: 'none',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    li: {
        maxWidth: 360
    },
    button: {
        textDecoration: 'none'
    }
  });


const Amiibo = () => {
    const classes = useStyles();
    const amiiboData = useAmiiboContext()

    let link = null;
    if (amiiboData.loading === false) {
        return link = (
            <ul className={classes.ul}>
                { amiiboData.data.map(el =>
                    <li className={classes.li} key={el.tail}>
                        <Card className={classes.root}>
                            <CardActionArea className={classes.action}>
                                <CardMedia
                                    className={classes.media}
                                    image={el.image}
                                    title="Link: The Hero of Hyrule">
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {el.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Release date in North America: {el.release.na}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    <a className={classes.button} href="https://www.nintendo.com/" target="_blank" rel="noopener noreferrer">Learn More</a>
                                </Button>
                            </CardActions>
                        </Card>
                    </li>     
                    )
                }
            </ul>
        )
    }

//MAIN RETURN STATEMENT
    return (
        <div>
            {amiiboData.loading && <LinearProgress color="secondary" />}
            {link}
        </div>
    )
}

export default Amiibo