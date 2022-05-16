import logo from '../../assets/images/logo.svg';
import { Button, Container, Content, Image } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header(props: HeaderProps) {
    return (
        <Container>
            <Content>
                <Image src={logo} alt="dt money" />
                <Button type="button"
                    onClick={props.onOpenNewTransactionModal}>
                    Nova transação
                </Button>
            </Content>
        </Container>
    )
}
