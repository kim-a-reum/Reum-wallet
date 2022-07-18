import "../styles/globals.css";
import { createUploadLink } from "apollo-upload-client";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface IGlobalContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
}

export const GlobalContext = createContext<IGlobalContext>({});

function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
  };

  const uploadLink = createUploadLink({
    uri: "http://backend08.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });
  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
