import App from "next/app";
import useAutenticacion from "../hooks/useAutenticacion";
import UserContext from "../context/UserContext";
import "../css/styles.css";
import "react-table/react-table.css";

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
