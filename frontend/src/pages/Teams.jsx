import React, { useEffect } from "react";
import Layout from "./Layout";
import TeamList from "../components/TeamList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
const Teams = () => {
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
    if(user && user.role.toLowerCase() !== 'admin') {
      navigate('/home')
    }
  }, [isError, user, navigate]);
  return (
    <Layout>
      <TeamList />
    </Layout>
  );
};

export default Teams;
