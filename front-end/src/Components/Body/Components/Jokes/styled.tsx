import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Content = styled.div`
    width: 100%;
    height: 200px;
`
export const Story = styled.p`
   text-align: left;
   margin: 40px 350px 0 350px;
`

export const WrapButton = styled.div`
    display: flex;
    justify-content: center;
`

export const ButtonVoteFun = styled.div`
    margin: 0 20px 0 0 ;
    width: 200px;
    height: 37px;
    border-bottom: 4px;
    background-color: #2c7edb;
    text-align: center;
    border-bottom: 3px solid #1c69c1;
    color: white;
    font-size: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 2px;
    :hover {
        background-color: rgba(42, 121, 209, 0.85);
    }
`

export const ButtonVoteNotFun = styled.div`
    margin: 0 0 0 20px ;
    width: 200px;
    height: 37px;
    border-bottom: 4px;
    background-color: #29b363;
    border-bottom: 3px solid #17984e;
    color: white;
    font-size: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 2px;
    :hover {
        background-color: rgba(41, 179, 99, 0.85);
    }
`

export const End = styled.div`
    text-align: center;
    margin: 40px 350px 0 350px;
`

export const Loading = styled.div`

`