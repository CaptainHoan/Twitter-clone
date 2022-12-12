import FlashMessage from "react-native-flash-message";
import 'react-native-gesture-handler';
import MainStack from './Screens/StackScreen/MainStack';
import { Provider } from 'react-redux'
import store from './RN-Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
      <FlashMessage position="top" />
    </Provider>
  )
}

export default App

