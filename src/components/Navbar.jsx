import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { ThemeContext } from "../context/ThemeContextProvider";
import axios from "axios";
import styled from "styled-components";

const Button = styled.button`
  outline: none;
  border-style: none;
  background-color: white;
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin: 0 0.5rem;
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

export default function Navbar() {
  const [isAuth, setAuth, authInfo, setAuthInfo] = useContext(AuthContext);
  const [{ theme, themeData }, toggleTheme] = useContext(ThemeContext);

  const Nav = ({ children }) => {
    return (
      <div
        style={{
          backgroundColor: themeData[theme].background,
          color: themeData[theme].color,
          padding: "1rem",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {children}
      </div>
    );
  };

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
      <Button onClick={toggleTheme}>
        {theme === "light" ? "DARK MODE" : "LIGHT MODE"}
      </Button>
    </Nav>
  );
}
