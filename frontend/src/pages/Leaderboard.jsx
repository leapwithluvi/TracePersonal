import React, { useEffect } from "react";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import Leaderboards from "../components/Leaderboards";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const Leaderboard = () => {
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
      <Leaderboards />
    </Layout>
  );
};

export default Leaderboard;
