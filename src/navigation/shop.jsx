import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Categories, Products, ProductDetail, Home } from '../screens/index'
import { colors } from '../constants';
const Stack = createNativeStackNavigator();

const ShopNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen 
                name='Home' 
                component={Home}
                options={{
                    title:'Inicio',
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
                name='Categories' 
                component={Categories}
                options={{
                    title:'Categorías',
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
                name='Products' 
                component={Products}
                options={{
                    title:'Productos',
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
                name='ProductDetail' 
                component={ProductDetail}
                options={{
                    title:'Detalle del Producto',
                    title:'Productos',
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

export default ShopNavigator;