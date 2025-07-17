import React, { useEffect } from "react";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import EditChallenges from "../components/EditChallenge";

const EditChallenge = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    if (user && user.role.toLowerCase() !== "admin") {
      navigate("/home");
    }
  }, [isError, user, navigate]);
  return (
    <Layout>
      <EditChallenges />
    </Layout>
  );
};

export default EditChallenge;
