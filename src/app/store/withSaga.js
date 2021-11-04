import React from 'react';
const { sagaMiddleware } = require(".")

const withSaga = (saga) => WrappedComponent => {
    sagaMiddleware.run(saga);

    return (props) => (
        <WrappedComponent {...props} />
    )
};

export default withSaga;

