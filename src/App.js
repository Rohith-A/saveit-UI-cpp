// import logo from './logo.svg';
import './App.css';
import { Provider, useDispatch } from "react-redux";
import store from './store/store';
import Header from './components/header';
import { Container } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "@aws-amplify/ui-react/styles.css"
import {withAuthenticator} from '@aws-amplify/ui-react';
import AllExpenditures from './components/ExpendituresData';

function App(user) {
  return (
    <Provider store={store}>
    <Header user={user}/>
    <Container maxWidth="lg" sx={{
      marginTop : 10
  }}>
    <div className="App">
    <AllExpenditures />
    </div>
    </Container>
    </Provider>
  );
}

export default withAuthenticator(App);
