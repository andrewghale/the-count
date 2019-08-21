import React from 'react';

const DivByThree = ({ divbythree }) => {

    if (divbythree === 0 || divbythree === 3) {
        return (null);
    } else if (divbythree % 3 === 0) {
        return (<li>&nbsp;Divisible By Three</li>);
    } else {
        return (null);
    }
}

export default DivByThree;