import React from 'react';
import { useRouteMatch } from 'react-router-dom';

const TeamMember = () => {
    const match = useRouteMatch();
    return (
        <div>
            {JSON.stringify(match.params)}
        </div>
    )
};

export default TeamMember;
