import React from "react";
import GestionCampanas from "../../components/campañas/GestionCampanas";
import Layout from "../../components/layout/Layout";
import Router from "next/router";


import jsCookie from "js-cookie";

function campanas(props) {
  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);
  return (
    <div>
      <Layout>
        <GestionCampanas />
      </Layout>
    </div>
  );
}

export default campanas;
