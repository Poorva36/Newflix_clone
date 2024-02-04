import React from "react";
import Main from "../Main";
import Row from "../Row";
import requests from "../../request";
import Signup from "./SignUp";

const Home = () => {
  return (
    <div>
      <Main />
      <Row title="Upcoming" fetchURL={requests.requestUpcoming} rowId="1" />
      <Row title="Popular" fetchURL={requests.requestPopular} rowId="2" />
      <Row title="Top Rated" fetchURL={requests.requestTopRated} rowId="3" />
      <Row title="Trending" fetchURL={requests.requestTrending} rowId="4" />
      <Row title="Horror" fetchURL={requests.requestHorror} rowId="5" />
    </div>
  );
};

export default Home;
