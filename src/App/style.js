import styled from 'styled-components';

export default styled.div`
    background-color: ${props => props.isMobile ? 'lightgreen' : 'lightblue' };
    font-family: 'Abril Fatface', cursive;
    padding: 20px;
    font-size: 18pt;
    color: #364159;
`