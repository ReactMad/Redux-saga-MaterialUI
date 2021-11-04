import React, { useEffect } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import classnames from 'classnames';
import { Grid } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

import ContentWrapper from '../../layouts/Layout1/components/ContentWrapper';

const useStyles = makeStyles(theme => createStyles({
    root:{
        "& input, textarea": {
            background: 'none',
            border: '2px solid white',
            borderRadius: '0.1rem',
            color: 'white',
            padding: '0.5rem 1rem',
            outline: 'none'
        },
        "& label": {
            color: 'white'
        },
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
    },
    contactForm: {
        maxWidth: '60%',
        margin: 'auto',
        "& button": {
            border: '2px solid cyan',
            padding: '1rem 3rem',
            color: 'cyan',
            position: 'relative',
            zIndex: 0,
            display: 'block',
            width: 'fit-content',
            outline: 'none',
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
    formField: {
        position: 'relative',
        margin: '1rem 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        "& input": {
            width: '100%',
        },
        "& textarea": {
            width: '100%',
            minHeight: '10rem',
            resize: 'none',
            "&.filled": {
                "& ~ label": {
                    transition: 'all 0.3s ease-in-out',
                    top: '-1rem',
                    left: '1rem'
                }
            }
        },
        
        "& label": {
            position: 'absolute',
            top: '1.5rem',
            left: '2rem',
            transition: 'all 0.3s ease-in-out'
        },
        "& input, textarea": {
            "&:focus": {
                borderColor: 'cyan',
                "& ~ label": {
                    transition: 'all 0.3s ease-in-out',
                    top: '-1rem',
                    left: '1rem'
                }
            },
            "&[value]:not([value=''])": {
                "& ~ label": {
                    transition: 'all 0.3s ease-in-out',
                    top: '-1rem',
                    left: '1rem'
                }
            }
        },
        "& .error-msg": {
            position: 'absolute',
            color: 'red',
            bottom: '-1rem',
            left: '1rem'
        }
    },
    contactInfo: {
        marginTop: '4rem'
    },
    contactInfoItem: {
        textAlign: 'center',
        color: 'white',
        fontSize: '1rem',
        "& svg": {
            color: 'cyan',
            width: '2rem',
            height: '2rem'
        },
        "& a": {
            marginTop: '1.5rem',
            fontSize: '1.5rem'
        }
    }
}));

const Contact = () => {
    const classes = useStyles();
    const {handleSubmit, handleChange, handleBlur, values, touched, errors} = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: yup.object({
            name: yup.string()
                .required('Name is required')
                .max(15, 'Should not be more than 15 letters'),
            email: yup.string()
                .required('Email is required')
                .email('Invalid Email address')
        }),
        onSubmit: values => {
            console.log(values);
        }
    });
    
    useEffect(() => {
        console.log(errors);
    }, [errors])
    return (
        <ContentWrapper title="Contact Me" icon="email">
            <div className={classnames(classes.root, "my-4")}>
                <div className="sub-heading">
                    <h2>Let's Talk</h2>
                </div>
                <Grid container spacing={4} component="form" onSubmit={handleSubmit} className={classnames(classes.contactForm)}>
                    <Grid item xs={12} sm={6} component="fieldset" className={classnames(classes.formField)}>
                        <input
                            id="name"
                            name="name"
                            type="text" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name} 
                        />
                        <label htmlFor="name">Name</label>
                        {
                            touched.name && errors.name ? 
                                <div className="error-msg">{errors.name}</div>
                                :
                                null
                        }
                    </Grid>
                    <Grid item xs={12} sm={6} component="fieldset" className={classnames(classes.formField)}>
                        <input
                            id="email"
                            name="email"
                            type="email" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email} 
                        />
                        <label htmlFor="email">Email</label>
                        {
                            touched.email && errors.email ? 
                                <div className="error-msg">{errors.email}</div>
                                :
                                null
                        }
                    </Grid>
                    <Grid item xs={12} component="fieldset" className={classnames(classes.formField)}>
                        <textarea
                            id="message"
                            name="message"
                            type="message"
                            className={`${values.message === "" ? '' : 'filled' }`} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message} 
                        ></textarea>
                        <label htmlFor="message">Message</label>
                    </Grid>
                    <Grid item xs={12} className="flex justify-center items-center">
                        <button type="submit">Send Me</button>
                    </Grid>
                </Grid>
                <Grid container className={classnames(classes.contactInfo)}>
                    <Grid item xs={4} className={classnames(classes.contactInfoItem)}>
                        <LinkedInIcon />
                        <br />
                        <a href="https://www.linkedin.com/">Connect In LinkedIn</a>
                    </Grid>
                    <Grid item xs={4} className={classnames(classes.contactInfoItem)}>
                        <EmailIcon />
                        <br />
                        <a href="mailto:topcoder0128@gmail.com">topcoder0128@gmail.com</a>
                    </Grid>
                    <Grid item xs={4} className={classnames(classes.contactInfoItem)}>
                        <PhoneIcon />
                        <br />
                        <a href="tel:+8615643331304">(+8)61 564 333 1304</a>
                    </Grid>
                </Grid>
            </div>
        </ContentWrapper>
    )
};

export default Contact;

