// import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from '../screens/SignIn';
import SignOnScreen from '../screens/SignOn';

// const AuthNavigatorConfig = {
//   initialRouteName: 'Login',
//   header: null,
//   headerMode: 'none',
// };

// const RouteConfigs = {
//   Login: SignInScreen,
// };

// const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

// export default AuthNavigator;

const Auth = {
    screens: {
        SignIn: SignInScreen,
        SignOn: SignOnScreen
    },
    configs: {
        screenOptions: {
            animationEnabled:true
        },
        headerStyle: {
            backgroundColor: '#3f451e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }
}

export default Auth