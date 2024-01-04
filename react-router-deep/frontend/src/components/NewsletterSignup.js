import { useFetcher } from "react-router-dom";
import classes from "./NewsletterSignup.module.css";
import { useEffect } from "react";

function NewsletterSignup() {
  const fetcher = useFetcher();
  // useFetcher은 리다이렉트나 전환하지 않고, loader나 actions을 사용해야할 때 사용한다.
  // 라우트 변경을 트리거 하지 않은 채로 배후에 요청을 전송할때 사용한다.

  // load 된 데이터 구조분해
  const { data, state } = fetcher;
  console.log(" fetcher =====>", fetcher);
  console.log("data,state ==>", data, state);

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
    console.log("data,state ====>", data, state);
  }, [data, state]);
  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
