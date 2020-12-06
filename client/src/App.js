import React from "react";
import "./App.css";

import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./apolloClient";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import { MenuBar } from "./components";
import { Home, Login, Register } from "./pages";
import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";

function App() {
  return (
    <AuthProvider>
      <ApolloProvider client={apolloClient}>
        <Router>
          <Container>
            <MenuBar />
            <Route exact path="/" component={Home} />
            <AuthRoute exact path="/login" component={Login} />
            <AuthRoute exact path="/register" component={Register} />
          </Container>
        </Router>
      </ApolloProvider>
    </AuthProvider>
  );
}

export default App;
