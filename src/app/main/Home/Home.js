import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Typer from '../shared-components/Typer';

const useStyles = makeStyles(theme => createStyles({
  root: {
    backgroundImage: 'url(assets/img/bg.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    position: 'relative',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    "&::before": {
      content: '""',
      display: 'block',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: '#333333',
      opacity: '0.65'
    },
    "& .name": {
      position: 'relative',
      zIndex: 1,
      fontSize: '4rem',
      fontWeight: 'bolder',
      color: 'white',
      "& .last-name": {
        color: 'rgba(0, 150, 250, 0.7)'        
      }
    },

    "& .intro": {
      color: 'white',
      position: 'relative',
      zIndex: 1,
      fontSize: '2rem',
      fontWeight: 'bold',
      "& span": {
        borderBottom: "2px solid #0b7ecb",
        textTransform: 'uppercase'
      }
    }
  },
}));

const Home = () => {
    const classes = useStyles();

    const textArr = ["freelancer", "web developer", "react specialist"];

    return (
        <section className={classnames(classes.root, "sm:ml-0 md:ml-48")}>
            <h1 className="name">JASON <em className="last-name">EMILIS</em></h1>
            
            <p className="intro">
              I am a&nbsp;
              <Typer textArr={textArr} timeInterval={100} />
            </p >
        </section>
    )
}

export default Home;
