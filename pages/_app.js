import { CookiesProvider } from "./context/CookiesProvider";
import { parseCookies } from "./utils/parseCookies";

function MyApp({ Component, pageProps, cookies }) {
  return (
    <CookiesProvider cookies={cookies}>
      <Component {...pageProps} />
    </CookiesProvider>
  );
}

MyApp.getInitialProps = ({ ctx }) => {
  const cookies = parseCookies(ctx);

  return {
    cookies,
  };
};

export default MyApp;
