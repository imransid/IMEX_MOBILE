import React, { type FC, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './src/Navigators/StackNavigator';
import SplashScreen from './src/Screens/SplashScreen/Splash.Screen';

const App: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>{isLoading ? <SplashScreen /> : <StackNavigator />}</NavigationContainer>
  );
};

export default App;
