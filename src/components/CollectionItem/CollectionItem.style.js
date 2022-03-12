import styled from 'styled-components'

export const Card = styled.div`
width: 200px;
height: 240px;
border: 1px solid black;
margin: 0 10px;
padding: 4px 6px;
display: flex;
flex-direction: column;
justify-content: flex-end;
position: relative;

border-radius: 5px;
`

export const Price = styled.span`
color: #c62828;
`

export const Fill = styled.div`
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
width: 100%;
height: 70%;
position: absolute;
top: 0;
left: 0;

& img {
object-fit: cover;
width: 100%;
height: 90%;
border-radius: 5px;
}

`