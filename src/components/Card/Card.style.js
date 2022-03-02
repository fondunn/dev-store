import styled from 'styled-components'

export const Container = styled.div`
width: 180px;
height: 280px;
margin: 10px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

border: 1px solid #f0f0f0;


& img {
    width: 100px;
    height: 100px;
}
`