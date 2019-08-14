import React, { useState } from 'react';
import logo from '../the_count_14aug.svg'
import styled from 'styled-components';

const Button = styled.button`
    background-color: rgba(240, 240, 240, 1);
    border: none;
    border-radius: 4px;
    margin: 1rem;
    padding: 1rem 2rem;
    font-size: 3rem;
    `;

const Title = styled.h1`
    font-size: 3rem;
    color: black;
    background: rgba(255, 255, 255, 0.3);
    padding: 2rem;
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
    margin: 2rem;
    font-size: 3rem;
`;

const Wrapper = styled.div`
    font-family: Arial;
    font-size: 18px;
    margin: 0 auto;
    padding: 1rem;
    width: 500px;
    background: linear-gradient(45deg, #4d3252 0%,#8d6c93 65%,#aa2338 100%);    background-position-x: -35%;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
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

    return (
        <div>
            <Wrapper>
                <img src={logo} width="400" height="400" alt="the count"></img>
                <Title>The Count</Title>
                <Total>
                    {count}
                </Total>
                <div>
                    <Button onClick={handleDecrement}>-</Button>
                    <Button onClick={handleIncrement}>+</Button>
                    <Reset onClick={handleReset}>Reset</Reset>
                </div>
            </Wrapper>
        </div>
    )
}

export default CounterApp;