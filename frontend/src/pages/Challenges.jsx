import React, { useEffect } from "react";
import Layout from "./Layout";
import Challenge from "../components/Challenge";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const Challenges = () => {
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
      <Challenge />
    </Layout>
  );
};

export default Challenges;
