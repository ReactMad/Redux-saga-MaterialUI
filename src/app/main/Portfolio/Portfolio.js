import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { Grid } from '@material-ui/core';
import Isotope from 'isotope-layout';
import Tilt from 'react-tilt';
import ContentWrapper from '../../layouts/Layout1/components/ContentWrapper';

const portofolios = [
    {
        id: 1,
        title: 'StartUp Company Site building',
        img: 'assets/img/portfolios/img-1.jpg',
        category: 'development',
        detail_action: 'redirect'
    },
    {
        id: 2,
        title: 'React Reusable Componet',
        img: 'assets/img/portfolios/img-5.jpg',
        category: 'react',
        detail_action: 'show'
    },
    {
        id: 3,
        title: 'StartUp Company Site building',
        img: 'assets/img/portfolios/img-1.jpg',
        category: 'react',
        detail_action: 'redirect'
    },
    {
        id: 4,
        title: 'StartUp Company Site building',
        img: 'assets/img/portfolios/img-1.jpg',
        category: 'react',
        detail_action: 'redirect'
    },
    {
        id: 5,
        title: 'StartUp Company Site building',
        img: 'assets/img/portfolios/img-1.jpg',
        category: 'angular',
        detail_action: 'redirect'
    },
    {
        id: 6,
        title: 'StartUp Company Site building',
        img: 'assets/img/portfolios/img-1.jpg',
        category: 'angular',
        detail_action: 'redirect'
    },
    {
        id: 7,
        title: 'StartUp Company Site building',
        img: 'assets/img/portfolios/img-1.jpg',
        category: 'devops',
        detail_action: 'redirect'
    },
    {
        id: 8,
        title: 'StartUp Company Site building',
        img: 'assets/img/portfolios/img-1.jpg',
        category: 'devops',
        detail_action: 'redirect'
    },
    {
        id: 9,
        title: 'StartUp Company Site building',
        img: 'assets/img/portfolios/img-1.jpg',
        category: 'vue',
        detail_action: 'redirect'
    },
];

const categories = ['react', 'angular', 'devops', 'vue'];

const useStyles = makeStyles(theme => createStyles({
    root:{

    },
    filter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px dashed',
        borderColor: '#565759',
        borderRadius: '1.4rem',
        margin: '2rem auto',
        width: 'fit-content',
        "& li": {
            color: 'white',
            fontSize: '1rem',
            padding: '0.5rem 1rem',
            textTransform: 'uppercase',
            borderRadius: '1.5rem',
            cursor: 'pointer',
            "&.active": {
                transition: 'background 0.3s ease-in-out',
                background: '#0d75ba',
            }
        }
    },
    portofolios: {
        "& .port-item": {
            "& figure": {
                borderRadius: '2rem',
                overflow: 'hidden',
                "& figcaption": {
                    position: 'absolute',
                    background: 'rgba(37, 150, 235, 0.8)',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '2rem',
                    opacity: 0,
                    padding: '2rem',
                    color: 'white',
                    overflow: 'hidden',
                    "& h4": {
                        position: 'absolute',
                        top: '10%',
                        left: '-100%',
                        zIndex: 1
                    },
                    "& p": {
                        textTransform: 'uppercase',
                        position: 'absolute',
                        bottom: '10%',
                        left: '-100%',
                    }
                },
                "&:hover": {
                    "& figcaption": {
                        transition: 'opacity 0.3s ease-in-out',
                        opacity: 1,
                        "& h4": {
                            transition: 'left 0.3s ease-in-out',
                            left: '1rem'
                        },
                        "& p": {
                            transition: 'left 0.3s ease-in-out',
                            left: '1rem'
                        }
                    }
                }
            }
        }
    }
}));

const Portfolio = () => {
    const classes = useStyles();
    const [isotope, setIsotope] = useState(null);

    useEffect(() => {
        const isoElem = document.getElementById('portfolios');
        let iso = new Isotope(isoElem, {
            // options
            itemSelector: '.port-item',
            layoutMode: 'masonry',
            hiddenStyle: {
                transform: 'scale(.2) skew(30deg)',
                opacity: 0
            },
            visibleStyle: {
                transform: 'scale(1) skew(0deg)',
                opacity: 1,
            },
            transitionDuration: '.5s'
        });

        setIsotope(iso);
    }, []);

    const [filter, setFilter] = useState('*');

    useEffect(() => {
        if (isotope) {
            filter === "*"
                ? isotope.arrange({ filter: `*` })
                : isotope.arrange({ filter: `.${filter}` });
        }
    }, [isotope, filter]);

    const tiltOptions = {
        maxTilt: 3,
        glare: true,
        maxGlare: .6,
        reverse: true
    }
    
    return (
        <ContentWrapper title="Portfolio" icon="people">
            <div className={classnames(classes.root)}>
                <ul className={classnames(classes.filter)}>
                    <li key="all" onClick={() => setFilter('*')} className={filter === "*" ? 'active': ''}>All</li>
                    {categories.map(_category => (
                        <li key={_category} onClick={() => setFilter(_category)} className={filter === _category ? 'active': ''}>{_category}</li>
                    ))}

                </ul>
                <Grid container spacing={4} id="portfolios" className={classnames(classes.portofolios)}>
                    {
                        portofolios.map(_port_item => (
                            <Grid item xs={6} sm={4} key={_port_item.id} className={`port-item ${_port_item.category}`}>
                                <Tilt options={tiltOptions}>
                                    <figure>
                                        <img src={_port_item.img} alt="port-img"/>
                                        <figcaption>
                                            <h4>{_port_item.title}</h4>
                                            <p>{_port_item.category}</p>
                                        </figcaption>
                                    </figure>
                                </Tilt>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </ContentWrapper>
    )
};

export default Portfolio;

