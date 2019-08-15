import React, { useState } from 'react';
import logo from '../assets/img/the_count_14aug.svg'
import styled from 'styled-components';

const Button = styled.button`
    border: none;
    border-radius: 4px;
    margin: 0.5rem 1rem;
    padding: 1rem 2rem;
    font-size: 4rem;
    font-weight: bold;
    `;

const Title = styled.h1`
    font-size: 3rem;
    color: black;
    background: rgba(255, 255, 255, 0.3);
    padding: 2rem;
    margin: 1rem;
    border-radius: 4px;
`;

const Reset = styled.button`
    background-color: rgba(176, 59, 59, 1);
    border: none;
    border-radius: 4px;
    margin: 1rem;
    padding: 1rem 2rem;
    font-size: 3rem;
`;

const Total = styled.div`
    background-color: rgba(240, 240, 240, 0.3);
    border-radius: 4px;
    padding: 2rem 3rem;
    margin: 1rem 2rem;
    font-size: 3rem;
`;

function CounterApp() {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count + 1);
    }

    function handleDecrement() {
        if (!count <= 0) {
        setCount(count - 1);
        }
    }

    function handleReset() {
        setCount(0);
    }

    let resetClass = "";
    resetClass += (count === 0) ? "red-bg":"white-bg";

    return (
        <div className="wrapper">
            <img src={logo} width="400" height="400" alt="the count"></img>
            <Title>The Count</Title>
            <Total>
                {(count === 0) ? "Zero":count}
            </Total>
            <div>
                <Button className='button' onClick={handleDecrement}>-</Button>
                <Button className='button' onClick={handleIncrement}>+</Button>
                <Reset className={resetClass} onClick={handleReset}>Reset</Reset>
            </div>
        </div>
    )
}

export default CounterApp;