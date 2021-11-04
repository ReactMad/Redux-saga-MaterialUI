import React from 'react';
import { ReactReduxContext } from 'react-redux';
import { injectReducer } from '.';

const withReducer = (key, reducer) => WrappedComponent => {
    injectReducer(key, reducer);

    return (props) => (
            <ReactReduxContext.Consumer>
                {({store, storeState}) => {
                    return storeState[key] ? <WrappedComponent {...props} /> : null;
                }}
            </ReactReduxContext.Consumer>
    );
};

export default withReducer;
