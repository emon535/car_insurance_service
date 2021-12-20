import styled from 'styled-components'


export const AppHeader = styled("div")`{
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: center;
    box-shadow: -1px -1px 5px 0px rgb(0 0 0 / 50%);
}
`
 export const CenteredText = styled.p`
  color: blue;
  text-align: center;
`;

export const MainWrapper = styled("main")`{
    align-items: center;
    justify-content: center;
    margin : 0 auto;
   padding: 2rem ;
   
}
`

export const RightButton = styled("button") `
align-self: flex-end;
`