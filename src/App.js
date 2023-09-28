import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect } from "react";
import AuthForm from "./Auth/AuthForm";
import UpdateProfile from "./Pages/updateProfile";
import TheNav from "./Pages/theNav";
import DailyExpRedux from "./Pages/DailyExpRedux";
import { useSelector } from "react-redux";
import Welcome from "./Pages/welcome";
import VerifyEmail from "./Auth/VerifyEmail";
import Forgot from "./Pages/Forgot";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  useEffect(() => {
    const body = document.body;
    if (isDarkTheme) {
      body.classList.add("dark-theme");
    } else {
      body.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);

  return (
    <div>
      <BrowserRouter>
        {isLoggedIn && <TheNav darkMode={isDarkTheme} />}
        <Switch>
          <Route exact path="/">
            <AuthForm />
          </Route>
          <Route exact path="/welcome">
            <Welcome />
          </Route>
          <Route path="/profile">
            <UpdateProfile />
          </Route>
          <Route path="/verify">
            <VerifyEmail />
          </Route>
          <Route path="/dailyexp">
            <DailyExpRedux darkMode={isDarkTheme} />
          </Route>
          <Route path="/forgot">
            <Forgot></Forgot>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
