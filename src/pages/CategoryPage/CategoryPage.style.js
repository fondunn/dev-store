import styled from 'styled-components'

export const Container = styled.div`
display: flex;
${'' /* justify-content: center; */}
${'' /* align-items: center; */}
background: #f1f8e9;

min-height: calc(100vh - 50px);
`

export const Content = styled.div`
display: flex;
flex-direction: column;
background: gray;
width: 100%;
padding: 18px;
`