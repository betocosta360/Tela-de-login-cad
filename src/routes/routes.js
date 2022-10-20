import { createNativeStackNavigator } from "@react-navigation/native-stack";




import Welcome from '../pages/Welcome/welcome'
import SignIn from '../pages/Signin/signin'
import SignUp from "../pages/Signup/signup";

const Stack = createNativeStackNavigator()

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen  name="Welcome" component={Welcome} options={{headerShown: false}}/>

      <Stack.Screen name="Signin" component={SignIn} options={{headerShown: false}}/>

      <Stack.Screen name="Signup" component={SignUp} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default Routes