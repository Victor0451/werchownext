import App from "next/app";
import useAutenticacion from "../hooks/useAutenticacion";
import UserContext from "../context/UserContext";

const MyApp = (props) => {
  const { Component, pageProps } = props;

  let usuario = useAutenticacion();

  return (
    <UserContext.Provider
      value={{
        usuario,
      }}
    >
      <Component {...pageProps} />
    </UserContext.Provider>
  );
};

export default MyApp;
