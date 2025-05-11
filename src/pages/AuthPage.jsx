import { useState } from "react";
import AuthTabs from "../components/AuthTabs";
import AuthCard from "../components/AuthCard";
import Title from "../components/Title";
import InputField from "../components/InputField";
import Divider from "../components/Divider";
import GoogleButton from "../components/GoogleButton";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineEye,
} from "react-icons/hi";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("Login");

  return (
    <div className="min-h-screen bg-zinc-600 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Title extraClassName="text-5xl pb-2 ">Blog do Conhecimento</Title>
        </div>
        <div className="max-w-md mx-auto">
          <AuthTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          <AuthCard>
            {activeTab === "Login" && (
              <>
                <Title extraClassName="text-3xl pb-2">Login</Title>
                <p className="text-gray-500 text-sm mb-4">
                  Entre com seu email e senha para acessar sua conta.
                </p>

                <InputField
                  label="Email"
                  type="email"
                  iconLeft={<HiOutlineMail className="text-gray-400" />}
                  placeholder="seu@email.com"
                />
                <InputField
                  label="Senha"
                  type="password"
                  iconLeft={<HiOutlineLockClosed className="text-gray-400" />}
                  iconRight={<HiOutlineEye className="text-gray-400" />}
                  placeholder="******"
                />

                <div className="text-sm text-emerald-600 text-right mb-4 cursor-pointer hover:underline">
                  Esqueceu a senha?
                </div>

                <button className="w-full py-2 text-white font-semibold rounded bg-gradient-to-r from-emerald-500 to-purple-500 hover:brightness-110 transition">
                  Entrar
                </button>

                <Divider />
                <GoogleButton />
              </>
            )}

            {activeTab === "Cadastro" && (
              <>
                <Title extraClassName="text-3xl pb-2">Cadastro</Title>
                <p className="text-gray-500 text-sm mb-4">
                  Crie uma conta para continuar.
                </p>
                {/*
                <InputField
                  label="Nome"
                  type="text"
                  placeholder="Nome"
                  iconLeft={<HiOutlineUserCircle className="text-gray-400" />}
                />
                */}
                <InputField
                  label="Email"
                  type="email"
                  placeholder="Email"
                  iconLeft={<HiOutlineMail className="text-gray-400" />}
                />
                <InputField
                  label="Senha"
                  type="password"
                  placeholder="Senha"
                  iconLeft={<HiOutlineLockClosed className="text-gray-400" />}
                  iconRight={<HiOutlineEye className="text-gray-400" />}
                />
                <InputField
                  label="Confirmar Senha"
                  type="password"
                  placeholder="Confirmar Senha"
                  iconLeft={<HiOutlineLockClosed className="text-gray-400" />}
                  iconRight={<HiOutlineEye className="text-gray-400" />}
                />
                <button className="w-full py-2 text-white font-semibold rounded bg-gradient-to-r from-emerald-500 to-purple-500 hover:brightness-110 transition">
                  Cadastrar
                </button>
                <Divider />
                <GoogleButton />
              </>
            )}
          </AuthCard>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
