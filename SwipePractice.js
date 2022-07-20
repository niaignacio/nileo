import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createAppContainer} from 'react-navigation';
   
   const SwipeTabs = createMaterialTopTabNavigator(
     {
       screen1: { screen: screen1},
       screen2: { screen: screen2},
       screen3: { screen: screen3}
     },
     {
       initialRouteName: "screen2",
       animationEnabled: true,
       tabBarOptions: {
         showLabel: false,
         showIcon: false,
         style: { height: 0 }
       }
     }
   );
   
   const swipePages = createAppContainer(SwipeTabs);
   export default swipePages;