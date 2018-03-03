import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Nav from './components/Nav';

class App extends Component {
    render() {
        return ( 
            
            <MuiThemeProvider >
               <AppBarExampleComposition/>
                
            < /MuiThemeProvider>
            
        )
    }
}

export default App;
