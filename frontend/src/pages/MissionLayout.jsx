import React from "react";
import Layout from "./Layout";
import DetailChallenge from "../components/DetailChallenge";
import Mission from "../components/MissionChallenge";

const MissionLayout = () => {
  return (
    <Layout>
      <DetailChallenge />
      <Mission />
    </Layout>
  );
};

export default MissionLayout;
