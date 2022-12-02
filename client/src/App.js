import React from 'react';
//import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

import { NavBar } from "./components/navBar";
import { MainPage } from "./components/MainPage";
import { ProductCard } from "./components/Cards";
// import SideBar from "./components/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {
  return (
    <ApolloProvider client = {client}>
      <div className="App">
        <NavBar />
        <MainPage />
        {/* <SideBar/> */}
        <ProductCard/>
      </div>
    </ApolloProvider>
  );
}

export default App;