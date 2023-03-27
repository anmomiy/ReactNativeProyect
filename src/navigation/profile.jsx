import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LocationListScreen, ProfileTab } from '../screens/index'
import Orders from '../screens/orders';
import LocationNavigator from './location';
import { colors } from '../constants';
const Stack = createNativeStackNavigator();

const ProfileNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName='ProfileTab'>
            <Stack.Screen 
                name='ProfileTab' 
                component={ProfileTab}
                options={{
                    title:'Mi perfil',
                    headerStyle: {
                        backgroundColor: colors.primary,
                      },
                      headerTintColor: colors.white,
                      headerTitleStyle: {
                        fontWeight: "bold",
                      },
                }}
            />
            <Stack.Screen 
                name='Orders' 
                component={Orders}
                options={{
                    title:'Mi historial',
                    headerStyle: {
                        backgroundColor: colors.primary,
                      },
                      headerTintColor: colors.white,
                      headerTitleStyle: {
                        fontWeight: "bold",
                      },
                }}
            />
            <Stack.Screen 
                name='LocationNavigator' 
                component={LocationNavigator}
                options={{
                    headerShown: false
                    
                }}
            />
        </Stack.Navigator>
    )

}

export default ProfileNavigator;