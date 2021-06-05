//import liraries
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./src/components/HomeScreen";
import AnimalInfo from "./src/components/AnimalInfoScreen";
import Load from "./src/components/LoadScreen";
import Register from "./src/components/RegisterScreen";

const MainDrawer = createDrawerNavigator(
  {
    AnimalInfo: AnimalInfo,
    Home: Home,
  },
  {
    //Prop
    contentOptions: {
      //Sempre que a aba estiver ativa, manter essa cor
      activeTintColor: `#80ccc0`,
      //Prop
      //Permite aumentar a fonte
      labelStyle: {
        fontSize: 18,
      },
    },
  }
);

const AppNavigator = createStackNavigator({
  Drawer: {
    screen: MainDrawer,
    
  },
  Load: {
    screen: Load,
    navigationOptions: {
      headerShown: false,
    },
  },
  Register: {
    screen: Register,
  },
});

//make this component available to the app
//export the component of our drawer
export default createAppContainer(AppNavigator);
