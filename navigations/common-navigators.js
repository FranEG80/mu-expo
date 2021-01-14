import SettingsScreens from '../screens/Setts'

const CommonNav = {
    screens: {
        Settings: SettingsScreens,
    },
    configs: {
        screenOptions: {
            animationEnabled: true,
            headerStyle: {
                backgroundColor: '#3f451e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    }
}

export default CommonNav