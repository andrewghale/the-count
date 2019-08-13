import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: aquamarine;
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

const Total = styled.div`
    background-color: rgb(250, 250, 250);
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
    background: linear-gradient(45deg, #9e572d 0%,#f9f44f 37%,#7db9e8 100%);
    background-size: 400%;
    background-position-x: -35%;
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
                <Title>The Count</Title>
                <Total>
                    {count}
                </Total>
                <Button onClick={handleIncrement}>+</Button>
                <Button onClick={handleDecrement}>-</Button>
                <Button onClick={handleReset}>Reset</Button>
            </Wrapper>
        </div>
    )
}

export default CounterApp;