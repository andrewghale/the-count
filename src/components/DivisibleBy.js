import React from 'react';

const DivisibleBy = ({ divby }) => {

    if (divby === 0) {
        return (null);
    } else if (divby % 3 === 0) {
        return (<li>&nbsp;Divisible By Three</li>);
    } else {
        return (null);
    };
}

export default DivisibleBy;