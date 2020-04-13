import App from "next/app";
import useAutenticacion from "../hooks/useAutenticacion";
import UserContext from "../context/UserContext";
import Router from "next/router";

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
