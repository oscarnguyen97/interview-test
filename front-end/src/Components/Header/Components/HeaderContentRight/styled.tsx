import styled from "styled-components";

export const ContentRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  width: calc(100% - 160px);
  position: relative;
  z-index: 2;
`;

export const WrapName = styled.div`

`
export const Description = styled.p`
  margin: 0 2px 0 2px;
  text-align: right;
  font-size: 18px;
  font-weight: 400;
`
export const Name = styled.p`
  margin: 0 2px 0 2px;
  text-align: right;
  font-size: 14px;
`
export const WrapAvatar = styled.div`

`

export const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`