import React from "react";
import GestionCampanas from "../components/campañas/GestionCampanas";
import Layout from "../components/layout/Layout";
import RedirectToLogin from "../components/auth/RedirectToLogin";
import jsCookie from "js-cookie";

function campanas(props) {
  let token = jsCookie.get("token");
  return (
    <div>
      <Layout>{!token ? <RedirectToLogin /> : <GestionCampanas />}</Layout>
    </div>
  );
}

export default campanas;
