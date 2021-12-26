import { AuthContext } from "../context/AuthContextProvider";
import { useContext } from "react";

export default function Home() {
  const [isAuth,, authInfo] = useContext(AuthContext);

  return (
    <div>
      {isAuth && authInfo ? (
        <div>
          <p>
            Successfully Logged In !! <br /> Token : {authInfo}
          </p>
        </div>
      ) : (
        <div>
          <p>Log In to continue!!</p>
        </div>
      )}
    </div>
  );
}
