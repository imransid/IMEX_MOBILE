import React, { type FC, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppStackNavigator from './src/navigators/AppStackNavigator';
import SplashScreen from './src/Screens/SplashScreen/Splash.Screen';

const App: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? <SplashScreen /> : <AppStackNavigator />}
    </NavigationContainer>
  );
};

export default App;
