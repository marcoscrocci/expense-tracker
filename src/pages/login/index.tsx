import React from 'react'
import Link from '../../components/molecules/Link';
import InputText from '../../components/molecules/inputText';
import Button from '../../components/atoms/Button';
import { 
    Container,
    Content,
    MainHeroSection,
    Titulo,
    FormLogin
} from '../../components/templates';
import SidebarHero from '../../components/organism/SidebarHero';


const Login = () => {
  return (
    <Container>
        <Content>
            <SidebarHero />
            <MainHeroSection>
                <Titulo>Entrar</Titulo>
                <FormLogin>
                    <InputText label="Email" type="email" />
                    <InputText label="Senha" type="password" />
                    <Button disabled>Confirmar</Button>
                    <Link href="/register">Criar registro</Link>
                </FormLogin>
            </MainHeroSection>
        </Content>
    </Container>
  )
}

export default Login