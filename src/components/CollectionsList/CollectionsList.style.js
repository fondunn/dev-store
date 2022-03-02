import styled from 'styled-components'

export const Container = styled.div`
display: flex;
${'' /* flex-wrap: wrap; */}
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
margin-bottom: 20px;

& p {
    margin-bottom: 10px;
}
`

export const StuffContainer = styled.div`
display: flex;
flex-wrap: wrap;
`