import React, { type FC, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from './src/navigators/DrawerNavigator';
import PublickStackNavigator from './src/navigators/PublicStackNavigator';
import SplashScreen from './src/Screens/SplashScreen/Splash.Screen';

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
      {isLoading ? <SplashScreen /> : hasToken ? <DrawerNavigator /> : <PublickStackNavigator />}
    </NavigationContainer>
  );
};

export default App;
