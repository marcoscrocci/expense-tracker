import Router from "next/router";
import React from "react";

import Button from "../../components/atoms/Button";
import { Container } from "../../components/templates";
import Card from "./components/Card";

const Dashboard = () => {
    const items = [
        {
            id: 1,
            title: "Netflix",
            category: "Streaming",
            amount: "R$ 39,90"
        },
        {
            id: 2,
            title: "Amazon Prime",
            category: "Streaming",
            amount: "R$ 9,90"
        },
        {
            id: 3,
            title: "Spotify",
            category: "Music",
            amount: "R$ 19,90"
        },
        {
            id: 4,
            title: "Claro NET",
            category: "Internet",
            amount: "R$ 189,90"
        },
        {
            id: 5,
            title: "Uber",
            category: "Transporte",
            amount: "R$ 89,90"
        },
        {
            id: 6,
            title: "Eletropaulo",
            category: "Energia",
            amount: "R$ 139,90"
        }  
    ];

    const handlerAdd = () => {
        console.log("handlerAdd");
        Router.push("/dashboard/add");
    };

    return (
        <Container>
            <header
                className={`
                    w-full
                    max-w-screen-lg
                    flex
                    justify-between
                    items-center
                    h-1/6
                    bg-red-100
                `}
            >
                <span className="font-bold text-2xl">Expanse Tracker</span>
                <nav className="flex gap-4">
                    <Button onClick={handlerAdd}>Adicionar Nova Conta</Button>
                    <Button className="mx-2" variant="ghost">
                        Sair
                    </Button>
                </nav>
            </header>
            <main className={`
                w-full
                max-w-screen-lg
                h-5/6 grid
                grid-cols-3
                bg-purple-50
                gap-4
                p-4
                content-start
                overflow-y-scroll
                pb-12
            `}>
                {items?.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        category={item.category}
                        amount={item.amount} 
                    ></Card>
                ))}
            </main>
        </Container>
    );
};

export default Dashboard;
