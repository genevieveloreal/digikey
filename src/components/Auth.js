import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Alert from "@material-ui/lab/Alert";
import AuthForm from "./AuthForm";
import AuthSocial from "./AuthSocial";
import AuthFooter from "./AuthFooter";
import { useRouter } from "./../util/router.js";
import reachout from "../images/reachout.png";

function Auth(props) {
  const router = useRouter();
  const [formAlert, setFormAlert] = useState(null);

  const handleAuth = (user) => {
    router.push(props.afterAuthPath);
  };

  const handleFormAlert = (data) => {
    setFormAlert(data);
  };

  return (
    <>
      {formAlert && (
        <Box mb={3}>
          <Alert severity={formAlert.type}>{formAlert.message}</Alert>
        </Box>
      )}

      <AuthForm
        type={props.type}
        typeValues={props.typeValues}
        onAuth={handleAuth}
        onFormAlert={handleFormAlert}
      />
      {["signup", "signin"].includes(props.type) && (
        <>
          {props.providers && props.providers.length > 0 && (
            <>
              <Box textAlign="center" fontSize={12} my={2}>
                OR
              </Box>
            </>
          )}

          <AuthFooter type={props.type} typeValues={props.typeValues} />
        </>
      )}
      <Box alignItems="center" display="flex" justifyContent="center" mt={2}>
        <img src={reachout} width="300px" />
      </Box>
    </>
  );
}

export default Auth;
