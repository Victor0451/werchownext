import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import ListadoCumpleanos from "../../../components/socios/cumpleanos/ListadoCumpleanos";

const cumpleanos = () => {
  const [cumples, guardarCumples] = useState(null);
  const [cumplesM, guardarCumplesM] = useState(null);

  let token = jsCookie.get("token");

  const listCumple = async () => {
    await axios
      .get(`http://190.231.32.232:5002/api/sgi/socios/listcumple`)
      .then((res) => {
        guardarCumples(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const listCumpleM = async () => {
    await axios
      .get(`http://190.231.32.232:5002/api/sgi/socios/listcumpleM`)
      .then((res) => {
        guardarCumplesM(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      listCumple();
      listCumpleM();
    }
  }, []);

  return (
    <Layout>
      <div className="container">
        <hr className="mt-4 mb-4" />

        <div className="alert alert-primary border border-dark p-4">
          <h2 className="mb-4 text-center">
            <strong>
              <u>Listados de socios que cumplen años mañana</u>
            </strong>
          </h2>
        </div>

        <hr className="mt-4 mb-4" />
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              class="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Werchow
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Mutual
            </a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active mt-4"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <ListadoCumpleanos data={cumples} />
          </div>
          <div
            class="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <ListadoCumpleanos data={cumplesM} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default cumpleanos;
