import { AuthContext } from "../context/AuthContextProvider";
import { ThemeContext } from "../context/ThemeContextProvider";
import { useContext } from "react";
import styled from "styled-components";



export default function Home() {
  const [isAuth, , authInfo] = useContext(AuthContext);
  const [{ theme, themeData }] = useContext(ThemeContext);

  const SignInInfo = styled.div`
  background-color: ${themeData[theme].background};
  color: ${themeData[theme].color};
  padding: 1rem;
  width: 20%;
  margin: auto;
  border-radius: 0.5rem;
`;

  return (
    <div>
      <h1>Learning Context API</h1>
      {isAuth && authInfo ? (
        <SignInInfo>
          <p>
            Logged In Successfully! <br /> Token : {authInfo}
          </p>
        </SignInInfo>
      ) : (
        <div>
          <p>Log In to continue!!</p>
        </div>
      )}
    </div>
  );
}
