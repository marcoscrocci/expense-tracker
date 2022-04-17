import React from "react";
import tw from "tailwind-styled-components";
import Button from "../../../../components/atoms/Button";

function Card({ id, title, category, price }) {
    return (
        <CardContainer>
            <input type="hidden" id="id" value={id} />

            <h2 className="font-bold text-xl">{title}</h2>
            <p
                className={`
                    px-3
                    bg-purple-100
                    rounded-full
                    h-8
                    flex
                    items-center
                `}
            >
                {category}
            </p>
            <p
                className={`
                    font-medium
                `}
            >
                {price}
            </p>
            <footer className="flex w-full justify-between">
                <Button
                    variant="ghost"
                >
                    Editar
                </Button>
                <Button
                    variant="ghost"
                    className="text-red-500"
                >
                    Excluir
                </Button>                
            </footer>
        </CardContainer>
    );
}

export const CardContainer = tw.article`
    bg-white
    p-4
    shadow-lg
    rounded-lg
    relative
    flex
    flex-col
    gap-2
    justify-between
`;

export default Card;
