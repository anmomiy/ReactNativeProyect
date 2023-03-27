import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { colors } from '../constants';
import {Cart } from '../screens/index'

const Stack = createNativeStackNavigator();

const CartNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName='Cart'>
            <Stack.Screen 
                name='Cart' 
                component={Cart}
                options={{
                    title:'Carrito',
                    headerStyle: {
                        backgroundColor: colors.primary,
                      },
                      headerTintColor: colors.white,
                      headerTitleStyle: {
                        fontWeight: "bold",
                      },
                }}
            />
        </Stack.Navigator>
    )

}

export default CartNavigator;