import React, { useContext, useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext, { AuthContextProvider } from "./store/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  return (
    // <AuthContextProvider>
    <>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </>
    // </AuthContextProvider>
  );
}

export default App;

// 아래는 기본 형 위에는 Context 사용

// import React, { useEffect, useState } from "react";

// import Login from "./components/Login/Login";
// import Home from "./components/Home/Home";
// import MainHeader from "./components/MainHeader/MainHeader";
// import AuthContext from "./store/auth-context";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const storedUserLoggeedInInoformation = localStorage.getItem("isLoggedIn");

//     if (storedUserLoggeedInInoformation) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const loginHandler = (email, password) => {
//     localStorage.setItem("isLoggedIn", 1);
//     setIsLoggedIn(true);
//   };

//   const logoutHandler = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem("isLoggedIn");
//   };

//   return (
//     // <React.Fragment> // AuthContext가 Root 컴포넌트 역할을 하기 때문에 React.Fragment or <>는 감싸지 않아도 된다.
//     // 컨텍스트에 기본값이 있으면 사실은 Provider가 필요가 없다. Provider 와 Consumer가 충돌이 발생한다.
//     <AuthContext.Provider
//       value={{
//         isLoggedIn: isLoggedIn,
//         onLogout: logoutHandler,
//       }}
//     >
//       {/* 컨텍스트 사용해서 props를 넘겨주지 않아도 된다. */}
//       {/* <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} /> */}
//       <MainHeader />
//       {/* 핸들러 함수도 context에 담아서 사용한다. */}
//       {/* <MainHeader onLogout={logoutHandler} /> */}
//       <main>
//         {!isLoggedIn && <Login onLogin={loginHandler} />}
//         {isLoggedIn && <Home onLogout={logoutHandler} />}
//       </main>
//     </AuthContext.Provider>
//     // {/* </React.Fragment> */}
//   );
// }

// export default App;
