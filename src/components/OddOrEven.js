import React from 'react';

const OddOrEven = ({ oddeven }) => {
    if (oddeven === 0) {
        return (<div>&nbsp;Zero</div>);
    } else if (oddeven % 2 === 0) {
        return (<div>&nbsp;Even</div>);
    } else {
        return (<div>&nbsp;Odd</div>);
    }
}

export default OddOrEven;