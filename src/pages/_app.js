import React from "react";
import Navbar from "./../components/Navbar";
import IndexPage from "./index";
import AboutPage from "./about";
import FaqPage from "./faq";
import ContactPage from "./contact";
import DashboardPage from "./dashboard";
import SettingsPage from "./settings";
import AuthPage from "./auth";
import { Switch, Route, Router } from "./../util/router.js";
import NotFoundPage from "./not-found.js";
import Footer from "./../components/Footer";
import "./../util/analytics.js";
import { ThemeProvider } from "./../util/theme.js";
import logo from "../images/logo-transparent.png";
import logoNightmode from "../images/logo-transparent-nightmode.png";

function App(props) {
  return (
    <ThemeProvider>
      <Router>
        <>
          <Navbar
            color="default"
            logo={logo}
            logoInverted={logoNightmode}
          />

          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/about" component={AboutPage} />

            <Route exact path="/faq" component={FaqPage} />

            <Route exact path="/contact" component={ContactPage} />

            <Route exact path="/dashboard" component={DashboardPage} />

            <Route exact path="/settings/:section" component={SettingsPage} />

            <Route exact path="/auth/:type" component={AuthPage} />

            <Route component={NotFoundPage} />
          </Switch>

          <Footer
            bgColor="light"
            size="normal"
            bgImage=""
            bgImageOpacity={1}
            description="A short description of what you do here"
            copyright={`© ${new Date().getFullYear()} DigiKey`}
            logo={logo}
            logoInverted={logoNightmode}
            sticky={true}
          />
        </>
      </Router>
    </ThemeProvider>
  );
}

export default App;
