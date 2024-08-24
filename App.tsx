import React, { type FC, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from './src/navigators/DrawerNavigator';
import SplashScreen from './src/Screens/SplashScreen/Splash.Screen';
import AppStackNavigator from './src/navigators/AppStackNavigator';

const App: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasToken] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? <SplashScreen /> : hasToken ? <DrawerNavigator /> : <AppStackNavigator />}
    </NavigationContainer>
  );
};

export default App;
