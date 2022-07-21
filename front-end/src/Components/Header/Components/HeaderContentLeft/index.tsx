import { ContentLeft, LinkLogo, ImgLogo } from './styled'

const HeaderContentLeft = () => {
    return (
        <ContentLeft>
            <LinkLogo href="/#">
                <ImgLogo src="./Images/logo.png" alt="Logo"/>
            </LinkLogo>
        </ContentLeft>
    )
}


export default HeaderContentLeft