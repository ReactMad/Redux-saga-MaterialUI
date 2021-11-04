import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => createStyles({
    root:{
    }
}));

const BlogItem = ({ className, render }) => {
    const classes = useStyles();

    return (
        <Grid item xs={6} sm={4} className={classnames(classes.root, className)}>
            {render()}
        </Grid>
    )
};

export default BlogItem;

