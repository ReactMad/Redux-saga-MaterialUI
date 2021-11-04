import React from 'react';
import { createStyles, Grid, makeStyles } from '@material-ui/core';
import classnames from 'classnames';
import ContentWrapper from '../../layouts/Layout1/components/ContentWrapper';
import CareerItem from './CareerItem';
import SkillItem from './SkillItem';

const careers = [
    {
        id: 1,
        from: 2011,
        to: 2015,
        title: 'Software Engineer - Internship',
        company: 'Varsilkoff CY LTD',
        desc: 'Helped develop a user-testing application using Ruby on Rails and Backbone.js.'
    },
    {
        id: 2,
        from: 2015,
        to: 2017,
        title: 'Senior Web programmer',
        company: 'Varsilkoff CY LTD',
        desc: 'Retrofitted the entire product for multilingual support as a requirement for the advance of a major financial partnership.'
    },
    {
        id: 3,
        from: 2018,
        title: 'Senior Frontend Developer',
        company: 'Varsilkoff CY LTD',
        desc: 'Helped develop a user-testing application using Ruby on Rails and Backbone.js.'
    }
];

const educations = [
    {
        id: 1,
        from: 2000,
        to: 2009,
        title: 'Computer Science & Web Technics',
        company: 'Institute of Technology ',
        desc: 'Master degree with specialty in Computer science and technology '
    }
];

const frontEndSkills = [
    {
        skill: 'HTML',
        percent: 90
    },
    {
        skill: 'CSS/SCSS/SASS/LESS',
        percent: 90
    },
    {
        skill: 'JAVASCRIPT',
        percent: 80
    },
    {
        skill: 'REACT',
        percent: 92
    },
];

const backEndSkills = [
    {
        skill: 'PHP/LARAVEL/CI',
        percent: 90
    },
    {
        skill: 'NODE/Express',
        percent: 90
    },
    {
        skill: 'DB/MySql/MongoDB',
        percent: 80
    },
    {
        skill: 'AWS/Git',
        percent: 92
    },
    {
        skill: 'Python/Django',
        percent: 75
    }
];


const useStyles = makeStyles(them => createStyles({
    root: {
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

        },
    }
}));

const Resume = () => {
    const classes = useStyles();

    return (
        <ContentWrapper title="Resume" icon="assignment">
            <div className={classnames(classes.root, "my-4")}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <div className="sub-heading">
                            <h2>Exprience</h2>
                        </div>
                        <div>
                            {
                                careers.map(_career => <CareerItem key={_career.id} {..._career}/>)
                            }
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className="sub-heading">
                            <h2>Education</h2>
                        </div>
                        <div>
                            {
                                educations.map(_education => <CareerItem key={_education.id} {..._education}/>)
                            }
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <div className="sub-heading">
                            <h2>Front End Skills</h2>
                        </div>
                        {
                            frontEndSkills.map(_skill => <SkillItem key={_skill.skill} {..._skill} />)
                        }
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className="sub-heading">
                            <h2>Back End Skills</h2>
                        </div>
                        {
                            backEndSkills.map(_skill => <SkillItem key={_skill.skill} {..._skill} />)
                        }
                    </Grid>
                </Grid>
            </div>
        </ContentWrapper>
    )
};

export default Resume;
