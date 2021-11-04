import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Isotope from 'isotope-layout';
import ContentWrapper from '../../layouts/Layout1/components/ContentWrapper';
import BlogItem from './BlogItem';
import { Grid } from '@material-ui/core';

const blogs = [
    {
        id: 1,
        title: 'Top 3% Developer',
        bannerImage: 'assets/img/blogs/img-1.jpg',
        category: 'web',
        link: '/blog.html',
        date: '2019-10-20'
    },
    {
        id: 2,
        title: 'Top 3% Developer',
        bannerImage: 'assets/img/blogs/img-2.jpg',
        category: 'web',
        link: '/blog.html',
        date: '2019-10-20'
    },
    {
        id: 3,
        title: 'Top 3% Developer',
        bannerImage: 'assets/img/blogs/img-3.jpg',
        category: 'web',
        link: '/blog.html',
        date: '2019-10-20'
    },
    {
        id: 4,
        title: 'Top 3% Developer',
        bannerImage: 'assets/img/blogs/img-1.jpg',
        category: 'web',
        link: '/blog.html',
        date: '2019-10-20'
    },
    {
        id: 5,
        title: 'Top 3% Developer',
        bannerImage: 'assets/img/blogs/img-2.jpg',
        category: 'web',
        link: '/blog.html',
        date: '2019-10-20'
    },
    {
        id: 6,
        title: 'Top 3% Developer',
        bannerImage: 'assets/img/blogs/img-3.jpg',
        category: 'web',
        link: '/blog.html',
        date: '2019-10-20'
    }
];

const useStyles = makeStyles(theme => createStyles({
    root:{
        marginTop: '2rem'
    },

    blogItem: {
        position: 'relative',
        "& a": {
            display: 'block',
            border: '1px solid',
            borderColor: '#222324',
            overflow: 'hidden',
            "& .blog-item-desc": {
                position: 'relative',
                color: 'white',
                textAlign: 'center',
                margin: '-2rem auto auto auto',
                width: '82%',
                backgroundColor: '#2C2D2F',
                padding: '2rem 1rem',
                "& .blog-category": {
                    marginBottom: '0.3rem',
                    textTransform: 'uppercase',
                    fontSize: '12px',
                    fontWeight: '700',
                    letterSpacing: '0.2rem',
                    color: 'cyan'
                },
                "& .blog-title": {
                    fontSize: '1.3rem',
                    textTransform: 'capitalize',
                    margin: '0.4rem 0',
                    fontWeight: '700',
                    letterSpacing: '0.1rem'
                },
                "& .blog-date": {
                    fontStyle: 'italtic',
                    fontFamily: 'serif',
                    color: '#e1e1e1',
                    fontSize: '1.2rem'
                }
            },
            "&:hover": {
                "& .blog-item-img": {
                    "& img": {
                        transition: 'all 0.3s ease-in-out',
                        transform: 'scale(1.1)'
                    }
                },  
            }
        }
    }
}));

const Blog = () => {
    const classes = useStyles();
    const [isotope, setIsotope] = useState(null);
    useEffect(() => {
        const isoElem = document.getElementById('blogs');
        const iso = new Isotope(isoElem, {
            itemSelector: '.blog-item',
            layoutMode: 'fitRows',
        });

        setIsotope(iso)
    }, []);

    const [filter,] = useState('*');

    useEffect(() => {
        if (isotope) {
            filter === "*"
                ? isotope.arrange({ filter: `*` })
                : isotope.arrange({ filter: `.${filter}` });
        }
    }, [isotope, filter]);

    return (
        <ContentWrapper title="Blog" icon="people">
            <Grid container spacing={5} className={classnames(classes.root, "mt-4")} id="blogs">
                {
                    blogs.map(_blog => (
                        <BlogItem 
                            key={_blog.id} 
                            className={classnames(classes.blogItem, "blog-item")}
                            render = {() => {
                                return (
                                    <a href={_blog.link} className="blog-item-wrapper">
                                        <div className="blog-item-img">
                                            <img src={_blog.bannerImage} alt="blog img"/>
                                        </div>
                                        <div className="blog-item-desc">
                                            <span className="blog-category">{_blog.category}</span>
                                            <h4 className="blog-title">{_blog.title}</h4>
                                            <p className="blog-date">{_blog.date}</p>
                                        </div>
                                    </a>
                                )
                            }}
                        />
                    ))
                }
            </Grid>
        </ContentWrapper>
    )
};

export default Blog;

