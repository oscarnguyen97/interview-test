import {
    Container, 
    Content,
    CopyRight
} from './styled'

const Footer = () => {
    return (
        <Container>
            <Content>
                This website is created as part of Hlsolutions program. The materials contained on this website are provided for general information only and do not constitute any form of advice. HLS assumes no responsibility for the accuracy of any particular statement and accepts no liability for any loss or damage which may arise from reliance on the information contained on this site.
            </Content>
            <CopyRight>
                Copyright 2022 HLS
            </CopyRight>
        </Container>
    )
}

export default Footer