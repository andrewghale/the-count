import React from 'react';

const OddOrEven = ({ oddeven }) => {

    if (oddeven === 0) {
        return (<li>&nbsp;Zero</li>);
    } else if (oddeven % 2 === 0) {
        return (<li>&nbsp;Even</li>);
    } else {
        return (<li>&nbsp;Odd</li>);
    }
}

export default OddOrEven;