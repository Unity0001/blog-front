import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const GoogleButton = () => {
  const clientId =
    "988664902715-3td2jtcbdruafjf5l6ehfo3glroeeq3q.apps.googleusercontent.com";

  const onSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    //logica para autenticação
  };
  const onError = () => {
    console.error("Falha no login com o Google");
    //logica para erro
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={onSuccess}
        onError={onError}
        render={({ onClick }) => (
          <button onClick={onClick}>Entrar com o Google</button>
        )}
      />
    </GoogleOAuthProvider>
  );
};
export default GoogleButton;
