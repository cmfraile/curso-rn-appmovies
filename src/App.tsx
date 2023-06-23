import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Main from "./screens/Main.screen";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App = () => {
  
  return(
    <Provider store={store}>
      <NavigationContainer>
        <Main/>
      </NavigationContainer>
    </Provider>
  )

}

export default App