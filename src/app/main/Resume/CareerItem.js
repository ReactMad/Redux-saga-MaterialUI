import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles, createStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => createStyles({
    root: {
        color: 'white',
        display: 'flex',
        margin: '1rem 0'
    },
    period: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        paddingRight: '1rem'
    },
    content: {
        padding: '1rem',
        position: 'relative',
        "& .title": {
            fontSize: '1.3rem',
            fontWeight: '800',
        },
        "& .company": {
            color: 'cyan',
            textTransform: 'uppercase'
        },
        "& desc": {
            padding: '0.'
        }
    },
    lineLeft: {
        position: 'absolute',
        height: 'calc(100% - 2rem)',
        width: '2px',
        top: '1rem',
        left: 0,
        backgroundColor: 'cyan',
        "&::before, &::after": {
            content: '""',
            display: 'block',
            position: 'absolute',
            left: '0.05rem',
            transform: 'translateX(-50%)',
            width: '0.6rem',
            height: '0.6rem',
            borderRadius: '0.3rem',
            border: '2px solid',
            borderColor: 'cyan'
        },
        "&::before": {
            top: '-0.6rem'
        },
        "&::after": {
            bottom: '-0.6rem'
        }
    },
}))

const CareerItem = ({ from, to, title, desc, company}) => {
    const classes = useStyles();

    return(
        <div className={classnames(classes.root)}>
            <div className={classes.period}>
                <span className="from">{from}</span>
                <span className="to">{to}</span>
            </div>
            <div className={classnames(classes.content)}>
                <span className={classnames(classes.lineLeft)}></span>
                <h2 className="title">{title}</h2>
                <h4 className="company">{company}</h4>
                <p className="desc">{desc}</p>
            </div>
        </div>
    )
};

CareerItem.propTypes = {
    from: PropTypes.number,
    to: PropTypes.number,
    title: PropTypes.string,
    desc: PropTypes.string,
    company: PropTypes.string
};

CareerItem.defaultProps = {
    from: 2011,
    title: 'Software Engineer - Internship',
    desc: 'Worked as Team Supervisor in world leading business company, alibaba. Participated with several projects and learned a lot',
    company: 'Huawei, Beijing'
};

export default CareerItem;
