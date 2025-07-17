import React, { useEffect } from "react";
import Layout from "./Layout";
import FormEditTeam from "../components/FormEditTeam";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const EditTeam = () => {
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
      <FormEditTeam />
    </Layout>
  );
};

export default EditTeam;
