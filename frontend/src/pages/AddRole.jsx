import React, { useEffect } from "react";
import Layout from "./Layout";
import FormAddRole from "../components/FormAddRole";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const AddRole = () => {
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
      <FormAddRole />
    </Layout>
  );
};

export default AddRole;
