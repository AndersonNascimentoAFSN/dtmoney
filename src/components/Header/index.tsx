import logo from '../../assets/images/logo.svg';
import { Button, Container, Content, Image } from './styles';
export function Header() {
    return (
        <Container>
            <Content>
                <Image src={logo} alt="dt money" />
                <Button type="button">
                    Nova transação
                </Button>
            </Content>
        </Container>
    )
}
