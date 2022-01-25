import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfiler from "./components/UserProfile";

import { useSelector } from "react-redux";

function App() {
  const auth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {!auth && <Auth />}
      {auth && <UserProfiler />}
      <Counter />
    </>
  );
}

export default App;
