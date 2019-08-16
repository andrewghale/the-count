import React, { useState } from 'react';
import logo from '../assets/img/the_count_14aug.svg'
import Count from './Count';
import OddOrEven from './OddOrEven';
import { Button, Title, Reset } from '../style/components/Main';

const CounterApp = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        if (!count <= 0) {
        setCount(count - 1);
        }
    }

    const handleReset = () => {
        setCount(0);
    }

    return (
        <div className="wrapper">
            <img src={logo} width="400" height="400" alt="the count"></img>
            <Title>The Count</Title>
            <Count initialCount={count}/>
            <div className="oddOrEven">
                This number is
                <OddOrEven oddeven={count} />
            </div>
            <div>
                <Button className='button' onClick={handleDecrement}>-</Button>
                <Button className='button' onClick={handleIncrement}>+</Button>
                <Reset className={count <= 0 ? 'red-bg' : 'white-bg'} onClick={handleReset}>
                    Reset
                </Reset>
            </div>
        </div>
    )
}

export default CounterApp;