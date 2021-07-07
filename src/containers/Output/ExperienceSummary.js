import React from 'react';


function ExperienceSummary(props) {

    const getExperience = () => {

        let lastIndex = props.arr.length - 1;
        let output = ''

        props.arr.forEach(function (element, index) {
            if (index === lastIndex && index !== 0) {
                output = output.concat('and ' + element + ', ')
            } else {
                output = output.concat(element + ', ')
            }
        })

        return output;
    }


    return (<span> With {getExperience()}I am confident I will be an asset to your organization.</span>);
}

export default ExperienceSummary;
