import React from 'react';

const IsPrime = ({ isprime }) => {

    function IsPrime(isprime) {
        var it;
        for (var it = 2; it< isprime; it++) { // i will always be less than the parameter so the condition below will never allow parameter to be divisible by itself ex. (7 % 7 = 0) which would return true
          if (isprime % it === 0) {
              return false;
            } // when parameter is divisible by i, it's not a prime number so return false
        }
        // console.log(isprime);
        return isprime > 1; // otherwise it's a prime number so return true (it also must be greater than 1, reason for the n > 1 instead of true)
    }

    if (isprime === 0) {
        return (<div>Not A Prime</div>);
    } else {
        return IsPrime(isprime);
    }
}

export default IsPrime;