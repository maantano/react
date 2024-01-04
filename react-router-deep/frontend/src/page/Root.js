import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet, useNavigation } from "react-router-dom";

const Root = () => {
  // const navigation = useNavigation();
  // 상태 뭐 로딩, 에러, 전송 완료 이런거 등등 많이 담고 있다.

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
};

export default Root;
