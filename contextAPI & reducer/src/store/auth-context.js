import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogOut: () => {},
  onLogin: (email, password) => {},
  //   default 함수라도 작성해 두는게 IDE에서 자동완성을 시켜주기 때문에, 사용할 함수를 넣어주는것이 좋다.
});

// 리액트 컴포넌트를 만들었다. useState를 사용하기 위해서
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggeedInInoformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggeedInInoformation) {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", 1);
    setIsLoggedIn(true);
  };
  useEffect(() => {}, [isLoggedIn]);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogOut: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
