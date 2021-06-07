import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./src/components/HomeScreen";
import AnimalInfo from "./src/components/AnimalInfoScreen";
import Load from "./src/components/LoadScreen";

const MainDrawer = createDrawerNavigator(
  {
    'Tela Inicial': Home,
    'Descubra Animais': AnimalInfo,    
    
    
  },
  {
    contentOptions: {
      activeTintColor: `#c83737`,
      labelStyle: {
        fontSize: 18,
      },
    },
  }
);

const AppNavigator = createStackNavigator({
  Drawer: {
    screen: MainDrawer,
    navigationOptions: {
      headerShown: false,
    },
  },
  Load: {
    screen: Load,
    navigationOptions: {
      headerShown: false,
    },
  },
  
});

//make this component available to the app
//export the component of our drawer
export default createAppContainer(AppNavigator);
