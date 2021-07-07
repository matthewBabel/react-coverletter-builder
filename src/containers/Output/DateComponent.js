import React, { Component } from 'react';

class DateComponent extends Component {

    monthNames =  ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    getFormattedDate = (month, day, year) => {
        return [this.monthNames[month], ' ', day, ', ', year].join('');
    }


    render() {
        var date = new Date()
        var formattedDate = this.getFormattedDate(date.getMonth(), date.getDay(), date.getFullYear());

        return (
            <div>
                <p>{formattedDate}</p>
            </div>
        );
    }
}

export default DateComponent;
