import {
    HeaderTop,
    HeaderContent,
} from './styled'
import HeaderContentLeft from './Components/HeaderContentLeft'
import HeaderContentRight from './Components/HeaderContentRight'

const Header = () => {
    return (
        <HeaderTop >
            <HeaderContent>
                <HeaderContentLeft />
                <HeaderContentRight />
            </HeaderContent>
        </HeaderTop>
    )
}

export default Header