import axios from "axios";
import React, { useEffect } from "react";
import { 리다이렉트주소, 토큰요청주소 } from "../utils/Oauth";
import { KaKaoLoginKey } from "../App";
import { useNavigate } from "react-router-dom";

function Auth() {
  // 인가코드요청 : 쿼리스트링 형식으로 존재.
  // 토큰 요청
  const navigate = useNavigate();
  const getToken = async () => {
    try {
      const 인가코드 = new URL(window.location.href).searchParams.get("code");
      const headers = {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      };
      const body = {
        grant_type: "authorization_code",
        client_id: KaKaoLoginKey,
        redirect_uri: 리다이렉트주소,
        code: 인가코드,
      };
      const res = await axios.post(토큰요청주소, body, {headers});
      return res.data;
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getToken().then((data) => {
      localStorage.setItem("token", data.access_token);
      navigate("/");
    });
  }, []);
  return <div></div>;
}

export default Auth;
