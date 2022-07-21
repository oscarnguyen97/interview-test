import { 
    ContentRight,
    WrapName,
    Description,
    Name,
    WrapAvatar,
    Avatar
} from './styled';

const HeaderContentRight = () => {
    return (
        <>
        <ContentRight>
            <WrapName>
                <Description>
                    Handicrafted by
                </Description>
                <Name>
                    Oscar Nguyen
                </Name>
            </WrapName>
            <WrapAvatar>
                <Avatar src='./Images/IMG_0001.JPG'/>
            </WrapAvatar>
        </ContentRight>
        </>
    )
}

export default HeaderContentRight