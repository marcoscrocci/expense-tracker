import React from 'react'
import Link from '../../components/molecules/Link';
import InputText from '../../components/molecules/inputText';
import Button from '../../components/atoms/Button';

const Login = () => {
  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center">
        <div className="w-full h-full max-w-screen-lg grid grid-cols-2">
            <aside className="flex justify-center items-center">
                <img src="/hero-image.svg" alt="" />
            </aside>
            <main className="flex flex-col justify-center items-center gap-16">
                <h1 className="font-bold text-3xl">Financeiro</h1>
                <form className="flex flex-col w-full gap-2">
                    <InputText label="Email" type="email" />
                    <InputText label="Password" type="password" />
                    <Button disabled>Entrar</Button>
                    <Link href="/register">Criar Conta</Link>
                </form>
            </main>
        </div>
    </div>
  )
}

export default Login