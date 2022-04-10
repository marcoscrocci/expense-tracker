import React from "react";
import Button from "../../components/atoms/Button";
import { Container } from "../../components/templates";

const Dashboard = () => {
    return (
        <Container>
            <header className={`
                w-full
                max-w-screen-lg
                flex
                justify-between
                items-center
                h-1/6 bg-red-100
            `}>
                <span className="font-bold text-2xl">Expanse Tracker</span>
                <nav className="flex gap-4">
                    <Button>Adicionar Nova Conta</Button>
                    <Button className="mx-2" variant='ghost'>Sair</Button>
                </nav>    
            </header>        
        </Container>
    );
};

export default Dashboard;
