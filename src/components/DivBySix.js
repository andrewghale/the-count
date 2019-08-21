import React from 'react';

const DivBySix = ({ divbysix }) => {

    if (divbysix === 0 || divbysix === 6) {
        return (null);
    } else if (divbysix % 6 === 0) {
        return (<li>&nbsp;Divisible By Six</li>);
    } else {
        return (null);
    }
}

export default DivBySix;