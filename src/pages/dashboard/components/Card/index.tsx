import React from "react";
import Button from "../../../../components/atoms/Button";

function Card({ id, title, category, price }) {
    return (
        <article
            className={`
                bg-white 
                p-4 
                shadow-lg
                h-32
                rounded-lg
                relative
                flex
                flex-col
                gap-2
                justify-between 
            `}
        >
            <input type="hidden" id="id" value={id} />
            <Button
                variant="ghost"
                className={`
                            absolute top-0 right-0 h-8 mr-2 mt-2
                        `}
            >
                Excluir
            </Button>
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
        </article>
    );
}

export default Card;
