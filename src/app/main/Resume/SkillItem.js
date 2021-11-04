import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => createStyles({
    root: {
        position: 'relative',
        "& h2": {
            color: 'white',
            margin: '0.5rem 0',
            fontWeight: '700'
        }

    },
    skillbar: {
        height: '1rem',
        width: '100%',
        backgroundColor: '#404144',
    },
    percentBar: {
        display: 'block',
        backgroundColor: 'cyan',
        height: '100%'
    },
    percentPointer: {
        display: 'block',
        position: 'absolute',
        top: 0,
        color: 'white',
        fontWeight: '600',
        "&::before": {
            content: '""',
            display: 'block',
            border: '1rem solid',
            borderLeftColor: 'cyan',
            borderTopColor: 'cyan',
            borderBottomColor: 'transparent',
            borderRightColor: 'transparent',
            position: 'absolute',
            top: 0,
            left: '-0.9rem',
            transform: 'translate(-0.5rem, 2rem) rotate(45deg)'
        }
    },
}));

const SkillItem = ({ skill, percent }) => {
    const classes = useStyles();

    const [perNum, setPerNum] = useState(20);

    useEffect(() => {
        let timeoutId = null;
        if (perNum < percent) {
            timeoutId = setTimeout(() => {
                setPerNum(num => num + 1)
            }, 10)
        }

        return () => {
            clearTimeout(timeoutId)
        }
    }, [perNum, percent])

    return (
        <div className={classnames(classes.root)}>
            <h2>{skill}</h2>
            <div className={classnames(classes.skillbar)}>
                <span className={classnames(classes.percentBar)} style={{width: `${perNum}%`}}></span>
                <span className={classnames(classes.percentPointer)} style={{left: `${perNum}%`}}>{perNum}%</span>
            </div>
        </div>
    )
};

SkillItem.propTypes = {
    skill: PropTypes.string,
    percent: PropTypes.number
}

SkillItem.defaultProps = {
    skill: 'Your Skill',
    percent: 0
}

export default SkillItem;
