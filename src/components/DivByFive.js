import React from 'react';

const DivByFive = ({ divbyfive }) => {

    if (divbyfive === 0 || divbyfive === 5) {
        return (null);
    } else if (divbyfive % 5 === 0) {
        return (<li>&nbsp;Divisible By Five</li>);
    } else {
        return (null);
    }
}

export default DivByFive;