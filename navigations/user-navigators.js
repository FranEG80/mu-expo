import HomeScreen from "../screens/Home"
import ProfileScreen from "../screens/Profile"

const User = {
    screens: {
        Home: HomeScreen,
        Profile: ProfileScreen
    },
    configs: {
        screenOptions: {
            animationEnabled: false,
            headerStyle: {
                backgroundColor: '#3cc'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    }
}

export default User