import React from 'react';

const DivByFour = ({ divbyfour }) => {

    if (divbyfour === 0 || divbyfour === 4) {
        return (null);
    } else if (divbyfour % 4 === 0) {
        return (<li>&nbsp;Divisible By Four</li>);
    } else {
        return (null);
    }
}

export default DivByFour;