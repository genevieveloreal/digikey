import React from "react";
import Navbar from "./../components/Navbar";
import IndexPage from "./index";
import AboutPage from "./about";
import FaqPage from "./faq";
import CheckInPage from "./checkin";
import ContactPage from "./contact";
import DashboardPage from "./dashboard";
import ShareDataPage from "./sharedata";
import SettingsPage from "./settings";
import AuthPage from "./auth";
import { Switch, Route, Router } from "./../util/router.js";
import NotFoundPage from "./not-found.js";
import Footer from "./../components/Footer";
import "./../util/analytics.js";
import { ThemeProvider } from "./../util/theme.js";
import logo from "../images/logo-transparent.png";
import logoNightmode from "../images/logo-transparent-nightmode.png";
import ContactTracing from "./contact-tracing";
import MyData from "./my-data";

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

            <Route exact path="/contact-tracing" component={ContactTracing} />

            <Route exact path="/my-data" component={MyData} />

            <Route exact path="/checkin" component={CheckInPage} />

            <Route exact path="/share" component={ShareDataPage} />

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
