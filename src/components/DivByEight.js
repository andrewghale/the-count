import React from 'react';

const DivByEight = ({ divbyeight }) => {

    if (divbyeight === 0 || divbyeight === 8) {
        return (null);
    } else if (divbyeight % 8 === 0) {
        return (<li>&nbsp;Divisible By Eight</li>);
    } else {
        return (null);
    }
}

export default DivByEight;