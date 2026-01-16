// ----------------------------------------------------------------------

import { useScrollToTop } from './hooks/use-scroll-to-top';
import { AuthRouter, PrivateRouter } from './routes/sections';
import ThemeProvider from './theme';

const App = () => {
  useScrollToTop();
  const currentUser = null; // TODO: get current user from auth context or state

  // useEffect(() => {
  //   const initUser = async () => {
  //     const acToken = getAccessToken();
  //     if (acToken) {
  //     }
  //   };
  //   initUser();
  // }, []);

  return (
    <ThemeProvider>
      {currentUser && <PrivateRouter />}
      {!currentUser && <AuthRouter />}
    </ThemeProvider>
  );
};

export default App;
