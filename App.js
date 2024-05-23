const Stack = createNativeStackNavigator();
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Telas/Login';
import EsqueciASenha from './Telas/EsqueciASenha';
import CriarConta from './Telas/CriarConta';
import Home from './Telas/Home';


const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  return (
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EsqueciASenha"
              component={EsqueciASenha}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CriarConta"
              component={CriarConta}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
  );
};
export default App;
