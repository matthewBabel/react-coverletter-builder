
import React from 'react';

function RequirementSummary(props) {


    const getPoints = () => {
        return (
            <ul>
                {
                    props.points.map(point => {
                        return <li>{point}</li>
                    })
                }
            </ul>
        );
    }

    return (<p><span>Your listed requirements closely match my background and skills. A few I would like to highlight that would enable me to contribute to your bottom line are:</span>
        {getPoints()}
    </p>);

}

export default RequirementSummary;
