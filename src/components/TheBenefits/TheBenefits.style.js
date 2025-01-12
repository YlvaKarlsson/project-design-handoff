import styled from 'styled-components';

export const BenefitsContainer = styled.div`
width: 100%;
position: relative;
background-color: #95A6B5;
display: flex;
flex-direction: column;
align-items: center;
padding: 5%;
`;

export const BenefitsListContainer = styled.div`
display: flex;
flex-direction: column;
`;

export const UlContainer = styled.ul`
list-style: none;
margin: 0;
color: #F0EAE1;
padding: 5px;

li {display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 0.5rem;
}
`

export const BenefitsLeftContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`;

export const BenefitsRightContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
`;

export const TextContainer = styled.div`
display: flex;
flex-direction: row;
`;