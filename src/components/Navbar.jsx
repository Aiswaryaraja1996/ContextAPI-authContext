import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import axios from "axios";
import styled from "styled-components";

const Button = styled.button`
  outline: none;
  border-style: none;
  background-color:white;
  padding:0.5rem;
`;

const signIn = () => {
  const payLoad = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };
  const config = {
    url: "https://reqres.in/api/login/",
    method: "POST",
    data: payLoad,
  };
  return axios(config);
};

const Nav = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "1rem",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      {children}
    </div>
  );
};

export default function Navbar() {
  console.log("entered");
  const [isAuth, setAuth, authInfo, setAuthInfo] = useContext(AuthContext);

  const handleSignIn = async () => {
    try {
      var response = await signIn();

      setAuthInfo(response.data.token);
      setAuth(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignOut = () => {
    setAuthInfo(null);
    setAuth(false);
  };

  return (
    <Nav>
      {isAuth && authInfo ? (
        <Button onClick={handleSignOut}>SIGN OUT</Button>
      ) : (
        <Button onClick={handleSignIn}>SIGN IN</Button>
      )}
    </Nav>
  );
}
