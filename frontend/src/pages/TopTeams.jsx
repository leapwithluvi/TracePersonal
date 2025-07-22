import React, { useEffect } from "react";
import Layout from "./Layout";
import TopTeam from "../components/TopTeam";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import Leaderboards from "../components/Leaderboards";

const TopTeams = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);
  return (
    <Layout>
      <Leaderboards>
        <TopTeam />
      </Leaderboards>
    </Layout>
  );
};

export default TopTeams;
