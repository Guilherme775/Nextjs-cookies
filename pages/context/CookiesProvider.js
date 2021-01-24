import { useCookies, CookiesContext } from "./useCookies";

export const CookiesProvider = ({ children, cookies }) => {
  const cookiesValue = useCookies(cookies);

  return (
    <CookiesContext.Provider value={cookiesValue}>
      {children}
    </CookiesContext.Provider>
  );
};

export default CookiesProvider;
