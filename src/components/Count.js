import React from 'react';
import styled from 'styled-components';

const Total = styled.div`
    background-color: rgba(240, 240, 240, 0.3);
    border-radius: 4px;
    padding: 2rem 3rem;
    margin: 0.5rem 1rem;
    font-size: 3rem;
`;

const Count = ({initialCount}) => (
    <Total>
        {(initialCount === 0) ? "Zero":initialCount}
    </Total>
)

export default Count;
