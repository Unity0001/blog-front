import { useState } from "react";
import AuthTabs from "../components/AuthTabs";
import AuthCard from "../components/AuthCard";
import Title from "../components/Title";
import InputField from "../components/InputField";
import Divider from "../components/Divider";
import GoogleButton from "../components/GoogleButton";
import { register, login } from "../services/auth.service";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineUserCircle,
} from "react-icons/hi";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("Login");
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCadastro = async () => {
    setLoading(true);
    setError("");

    if (senha !== confirmarSenha) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      await register({ email, senha, nome });
      setActiveTab("Login");
    } catch (error) {
      console.error(
        "Erro no cadastro",
        error.response?.data?.message || error.message
      );
      setError(
        error.response?.data?.message || "Erro ao cadastrar. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      await login({ email, senha });
      window.location.href = "/welcome";
    } catch (error) {
      console.error(
        "Erro ao fazer login",
        error.response?.data?.message || error.message
      );
      setError(
        error.response?.data?.message || "Erro ao fazer login. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-600 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Title extraClassName="text-5xl pb-2 bg-gradient-to-r from-emerald-400 to-purple-400  text-transparent bg-clip-text whitespace-nowrap drop-shadow-l">
            Blog do Conhecimento
          </Title>
        </div>
        <div className="max-w-md mx-auto">
          <AuthTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          <AuthCard>
            {activeTab === "Login" && (
              <>
                <Title extraClassName="text-3xl pb-2 text-emerald-500">
                  Login
                </Title>
                <p className="text-gray-500 text-sm mb-4">
                  Entre com seu email e senha para acessar sua conta.
                </p>

                <InputField
                  label="Email"
                  type="email"
                  iconLeft={<HiOutlineMail className="text-gray-400" />}
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                  label="Senha"
                  type="password"
                  iconLeft={<HiOutlineLockClosed className="text-gray-400" />}
                  iconRight={<HiOutlineEye className="text-gray-400" />}
                  placeholder="******"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />

                <div className="text-sm text-emerald-600 text-right mb-4 cursor-pointer hover:underline">
                  Esqueceu a senha?
                </div>

                <button
                  className="w-full py-2 text-white font-semibold rounded bg-gradient-to-r from-emerald-500 to-purple-500 hover:brightness-110 transition"
                  onClick={handleLogin}
                  disabled={loading}
                >
                  {loading ? "Entrando..." : "Entrar"}
                </button>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                <Divider />
                <GoogleButton />
              </>
            )}

            {activeTab === "Cadastro" && (
              <>
                <Title extraClassName="text-3xl pb-2 text-purple-500">
                  Cadastro
                </Title>
                <p className="text-gray-500 text-sm mb-4">
                  Crie uma conta para continuar.
                </p>
                <InputField
                  label="Nome"
                  type="text"
                  placeholder="Nome Completo"
                  iconLeft={<HiOutlineUserCircle className="text-gray-400" />}
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
                <InputField
                  label="Email"
                  type="email"
                  placeholder="Email"
                  iconLeft={<HiOutlineMail className="text-gray-400" />}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                  label="Senha"
                  type="password"
                  placeholder="Senha"
                  iconLeft={<HiOutlineLockClosed className="text-gray-400" />}
                  iconRight={<HiOutlineEye className="text-gray-400" />}
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
                <InputField
                  label="Confirmar Senha"
                  type="password"
                  placeholder="Confirmar Senha"
                  iconLeft={<HiOutlineLockClosed className="text-gray-400" />}
                  iconRight={<HiOutlineEye className="text-gray-400" />}
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                />
                <button
                  className="w-full py-2 text-white font-semibold rounded bg-gradient-to-r from-emerald-500 to-purple-500 hover:brightness-110 transition"
                  onClick={handleCadastro}
                  disabled={loading}
                >
                  {loading ? "Cadastrando..." : "Cadastrar"}
                </button>
                <Divider />
                <GoogleButton />
              </>
            )}
          </AuthCard>
        </div>
        <div className="mt-6 text-center text-sm text-white/80">
          Ao continuar, você concorda com nossos{" "}
          <a href="#" className="text-emerald-300 hover:underline">
            Termos de Serviço
          </a>{" "}
          e{" "}
          <a href="#" className="text-emerald-300 hover:underline">
            Política de Privacidade
          </a>
          .
        </div>
      </div>
    </div>
  );
}
