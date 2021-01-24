import Head from "next/head";
import Link from "next/link";
import Cookie from "js-cookie";

import { useCookiesContext } from "../context/useCookies";

export function View() {
  const { state, actions } = useCookiesContext();
  const cookieToken = Cookie.get("token");

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div>
          <h1>cookie: {cookieToken ? cookieToken : "empty"}</h1>
          <h1>state: {state.token ? state.token : "empty"}</h1>
        </div>
        <Link href="/">
          <a onClick={() => actions.removeCookie()}>removeCookie</a>
        </Link>
      </div>
    </div>
  );
}

export default View;
