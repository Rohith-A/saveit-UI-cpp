// import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from './store/store';
import Header from './components/header';
import SignUp from './components/Signup';
import { Container } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "@aws-amplify/ui-react/styles.css"
import {Heading, withAuthenticator} from '@aws-amplify/ui-react';
import { Button } from '@mui/base';

function App({ signOut, user }) {
  return (
    <Provider store={store}>
    <Header />
    <Container maxWidth="md" sx={{
      marginTop : 10
  }}>
    <div className="App">
    <Heading level={1}>Hello {user.username}</Heading>
    <Button onClick={signOut}>Sign out</Button>
    </div>
    </Container>
    </Provider>
  );
}

export default withAuthenticator(App);
