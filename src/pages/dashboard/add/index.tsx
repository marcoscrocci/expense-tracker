import React from "react";
import Router from "next/router";
import InputText from "../../../components/molecules/inputText";
import Button from "../../../components/atoms/Button";
import {
    Container,
    Content,
    MainHeroSection,
    Titulo,
    FormCadastro,
} from "../../../components/templates";
import SidebarHero from "../../../components/organism/SidebarHero";

const Add = () => {
    const goToDashboard = () => {
        Router.push("/dashboard"); 
    };

    return (
        <Container>
            <Content>
                <SidebarHero />
                <MainHeroSection>
                    <Titulo>Nova Conta</Titulo>
                    <FormCadastro>
                        <InputText label="Título" type="text" />
                        <InputText label="Categoria" type="text" />
                        <InputText label="Preço" type="number" />
                    </FormCadastro>
                    <div className="flex w-full gap-2  max-w-sm">
                        <Button className="w-full" disabled>Confirmar</Button>
                        <Button className="w-full" onClick={goToDashboard} variant='red'>Cancelar</Button>
                    </div>
                </MainHeroSection>
            </Content>
        </Container>
    );
};

export default Add;
