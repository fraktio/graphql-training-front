import React, { useState } from "react";

import { Button } from "~/atoms/Button";
import { LoadingIcon } from "~/atoms/LoadingIcon";
import { scale } from "~/design";
import {
  LoginMutation,
  LogoutMutation,
  useAuthenticatedUserQuery,
  useLoginMutation,
  useLogoutMutation,
} from "~/generated/graphql";

export const ToggleAuthenticationButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useAuthenticatedUserQuery({
    pollInterval: 5000,
    onCompleted: (data) => {
      setIsLoggedIn(
        data.authenticatedUser.__typename === "AuthenticatedUserSuccess",
      );
    },
    onError: () => {
      setIsLoggedIn(false);
    },
  });

  const handleLoginSucess = (data: LoginMutation) => {
    if (data.login.__typename === "LoginUserSuccess") {
      setIsLoggedIn(true);
      localStorage.setItem("token", data.login.token);
    }
  };

  const handleLogoutSuccess = (data: LogoutMutation) => {
    if (data.logout) {
      setIsLoggedIn(false);
      localStorage.removeItem("token");
    }
  };

  const [loginMutation, loginData] = useLoginMutation({
    onCompleted: handleLoginSucess,
  });
  const [logoutMutation, logoutData] = useLogoutMutation({
    onCompleted: handleLogoutSuccess,
  });

  const handleLogout = () => {
    logoutMutation();
  };

  const handleLogin = () => {
    loginMutation({
      variables: {
        input: {
          username: "username",
          password: "password",
        },
      },
    });
  };

  const isLoading = loginData.loading || logoutData.loading;
  const handleOnClick = isLoggedIn ? handleLogout : handleLogin;

  const ButtonText = () => {
    if (isLoading) {
      return <LoadingIcon usePrimaryColor css={{ height: scale(4) }} />;
    }

    return <>{isLoggedIn ? "Logout" : "Autheticate"}</>;
  };

  return (
    <Button
      success={isLoggedIn}
      onClick={handleOnClick}
      disabled={isLoading}
      css={{ minWidth: scale(30) }}
    >
      <ButtonText />
    </Button>
  );
};
