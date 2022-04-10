import tw from 'tailwind-styled-components';

export const Container = tw.div`
    w-screen h-screen bg-gray-100 flex items-center flex-col
`;

export const Content = tw.div`
    w-full h-full max-w-screen-lg grid grid-cols-2
`;

export const MainHeroSection = tw.main`
    flex flex-col justify-center items-center gap-16
`;

export const Titulo = tw.h1`
    font-bold text-3xl
`;

export const FormLogin = tw.form`
    flex flex-col w-full gap-2  max-w-sm
`;