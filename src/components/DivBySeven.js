import React from 'react';

const DivBySeven = ({ divbyseven }) => {

    if (divbyseven === 0 || divbyseven === 7) {
        return (null);
    } else if (divbyseven % 7 === 0) {
        return (<li>&nbsp;Divisible By Seven</li>);
    } else {
        return (null);
    }
}

export default DivBySeven;