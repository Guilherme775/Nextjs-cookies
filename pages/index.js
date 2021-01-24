import Head from "next/head";
import Link from "next/link";

import { useCookiesContext } from "./context/useCookies";

export default function Home() {
  const { actions } = useCookiesContext();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/view">
        <a onClick={() => actions.addCookie("token")}>setCookie</a>
      </Link>
    </div>
  );
}
