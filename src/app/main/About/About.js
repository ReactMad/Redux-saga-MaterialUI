import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import ContentWrapper from '../../layouts/Layout1/components/ContentWrapper';
import { Grid } from '@material-ui/core';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import Slider from 'react-slick';

const useStyles = makeStyles(theme => createStyles({
    root:{
        "& .sub-heading": {
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            "& h2": {
                padding: '0.3rem 0.5rem',
                borderBottom: '2px solid cyan',
                color: 'white',
                fontSize: '1.4rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                position: 'relative',
                textTransform: 'uppercase',
                "&::before": {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '20%',
                    backgroundColor: 'cyan',
                    width: '2px'
                },
                "&::after": {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    height: '20%',
                    backgroundColor: 'cyan',
                    width: '2px'
                }
            }

        }
    },
    intro: {
        color: 'white',
        paddingTop: '1rem',
        '& h2': {
            fontSize: '2rem',
            fontWeight: 'bold'
        },
        '& p': {
            margin: '1rem 0'
        },
        '& ul': {
            marginBottom: '2rem',
            '& li': {
                padding: '0.5rem 0',
                '& span': {
                    textTransform: 'capitalize',
                    borderBottom: '1px solid cyan',
                    marginRight: '1rem'
                }
            }
        },
        '& .download-btn': {
            border: '2px solid cyan',
            padding: '1rem 3rem',
            color: 'cyan',
            position: 'relative',
            zIndex: 0,
            display: 'block',
            width: 'fit-content',
            '&::after': {
                content: '""',
                display: 'block',
                position: 'absolute',
                width: '0',
                height: '100%',
                top: 0,
                left: 0,
                backgroundColor: 'cyan',
                zIndex: -1
            },
            '&:hover': {
                color: 'black',
                '&::after': {
                    transition: 'width 0.3s ease-in-out',
                    width: '100%',
                }
            }
        }

    },
    keySkills: {

    },
    keySkillItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        '& h2': {
            fontWeight: 'bold',
            fontSize: '1.2rem'
        },
        '& img': {
            width: '20%',
            maxWidth: '20%',
            filter: 'invert(1)',
            margin: '2rem 0'
        },
        '& p': {
            textAlign: 'center',
            padding: '0 1.4rem'
        }
    },
    testimonials: {
    },
    slider: {

    },
    sliderItem: {
        padding: '2rem',
        outline: 'none',
        "& .content": {
            display: 'flex',
            color: 'white',
            background: '#17181B',
            padding: '1rem 2.5rem',
            borderTopLeftRadius: '2.5rem',
            borderBottomRightRadius: '2.5rem',
            position: 'relative',
            "&::before": {
                content: '""',
                display: 'block',
                width: '1rem',
                height: '1rem',
                position: 'absolute',
                bottom: 0,
                left: '2rem',
                transform:'translateY(50%) rotate(45deg)',
                backgroundColor: '#17181B'
            }
        },
        "& .user-info": {
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
            "& .user-avatar": {
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '4rem',
                height: '4rem',
                borderTopLeftRadius: '1.5rem',
                borderBottomRightRadius: '1.5rem'
            },
            "& .user-info-detail": {
                padding: '0 1rem',
                color: 'white',
                "& h4": {
                    fontSize: '1.3rem',
                    fontWeight: 'bold'
                }
            }
        }
    }
}));

const About = () => {
    const classes = useStyles();
    
    const userDetailInfo = {
        name: 'Json Emilis',
        age: 26,
        regsidence: 'New York, USA',
        address: '128 Wallstreet',
        email: 'topcoder123@gmail.com',
        phone: '+1 234 456 789',
        freelance: 'available'
    };

    const keySkills = [
        {
            title: 'Web Developer',
            desc: 'I am very proficient in web develpoer with over 6 years hands on experience. You can feel it',
            icon: 'assets/img/data.png'
        },
        {
            title: 'React Developer',
            desc: 'Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero.',
            icon: 'assets/img/data.png'
        },
        {
            title: 'Web Developer',
            desc: 'I am very proficient in web develpoer with over 6 years hands on experience. ',
            icon: 'assets/img/data.png'
        },
        {
            title: 'Web Developer',
            desc: 'I am very proficient in web develpoer with over 6 years hands on experience. ',
            icon: 'assets/img/data.png'
        },
    ];

    const testimonials = [
        {
            name: 'Emma Jones',
            position: 'CEO of Worldbusiness',
            avatar: 'assets/img/avatars/emma.jpg',
            content: 'Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum deserunt suscipit eos fugit. Consectetur dolorum temporibus facilis impedit exercitationem dignissimos.'
        },
        {
            name: 'Jack Smith',
            position: 'Marketing Director',
            avatar: 'assets/img/avatars/emma.jpg',
            content: 'Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum deserunt suscipit eos fugit. Consectetur dolorum temporibus facilis impedit exercitationem dignissimos.'
        },
        {
            name: 'Kate Fox',
            position: 'CTO of Worldbusiness',
            avatar: 'assets/img/avatars/emma.jpg',
            content: 'Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum deserunt suscipit eos fugit. Consectetur dolorum temporibus facilis impedit exercitationem dignissimos.'
        },
        {
            name: 'Kate Fox',
            position: 'CTO of Worldbusiness',
            avatar: 'assets/img/avatars/emma.jpg',
            content: 'Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum deserunt suscipit eos fugit. Consectetur dolorum temporibus facilis impedit exercitationem dignissimos.'
        }
    ];

    const slickSliderSetting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false
    };

    return (
        <ContentWrapper title="About" icon="people">
            <div className={classnames(classes.root)}>
                <Grid container spacing={8} className={classnames(classes.intro)}>
                    <Grid item xs={12} sm={6} md={8}>
                        <h2>Top 3% Developer</h2>
                        <p>
                            Over the last 6 years, I have developed a wide range of web apps for small to big enterprises. 
                            Importantly, I have rich hands-on expreience in web development along with implementing highly-responsive user interface components by deploying React concepts and this is definitely one thing that could give me an edge over others.
                            I am proficient in translating designs and wireframes into high-quality code with best-practise design patterns from the very beginning. 
                            What truely sets me apart from the others is that I am a super user of UI libraries including Google Material UI, so this means that I can bring your idea into reality in very short period of time with perfect result.
                        </p>
                        <p>
                            As for my personal characteristic, I thrive on challenge, I work well under pressure and I would describe myself as detail-oriented and proactive.
                            And also, as a committed team player, I could leverage all of my knowledge and experience to easily adapt to the new situations and work environments.
                        </p>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <h2>Personal Information</h2>
                        <ul>
                            {
                                Object.keys(userDetailInfo).map(key => {
                                    return (
                                        <li key={key}>
                                            <span>{key}:</span>
                                            {userDetailInfo[key]}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <a href="assets/profile.txt" download className="download-btn">Download CV</a>
                    </Grid>
                </Grid>
                
                {/* START KEY SKILLS */}
                <Grid container className={classnames(classes.keySkills, "my-8")}>
                    <Grid item xs={12} className="sub-heading">
                        <h2>Key Skills</h2>
                    </Grid>
                    {
                        keySkills.map((_skill, i) => {
                            return (
                                <Grid key={i} item xs={12} sm={6} md={3} className={classnames(classes.keySkillItem)}>
                                    <img src={_skill.icon} alt="skill icon" />
                                    <h2>{_skill.title}</h2>
                                    <p>{_skill.desc}</p>
                                </Grid>
                            )
                        })
                    }
                </Grid>
                {/* END KEY SKILLS */}

                {/* START TESTIMONIALS */}
                <div className={classnames(classes.testimonials, "my-8")}>
                    <div className="sub-heading">
                        <h2>testimonials</h2>
                    </div>

                    <Slider {...slickSliderSetting} className={classnames(classes.slider)}>
                        {
                            testimonials.map((_item, i) => {
                                return (
                                    <div key={i} className={classes.sliderItem}>
                                        <div className="content">
                                            <FormatQuoteIcon />
                                            <p>
                                                {_item.content}
                                            </p>
                                        </div>
                                        <div className="user-info">
                                            <div className="user-avatar" style={{backgroundImage: `url(${_item.avatar})`}}></div>
                                            <div className="user-info-detail">
                                                <h4>{_item.name}</h4>
                                                <p>{_item.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
                {/* END TESTIMONIALS */}
            </div>
        </ContentWrapper>
    )
};

export default About;

