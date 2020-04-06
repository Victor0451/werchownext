import App from "next/app";
import useAutenticacion from "../hooks/useAutenticacion";

const MyApp = (props) => {
  const usuario = useAutenticacion();
  console.log("desde app", usuario);
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

export default MyApp;
