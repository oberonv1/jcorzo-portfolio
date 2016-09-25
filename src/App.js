import React, {Component} from 'react';
import resume_pic from './images/resume_pic.jpg';
import './App.css';
import List from './components/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <div className="App-header">
                        <Avatar src={resume_pic}
                        size={200}/>
                        <h2>Welcome to React</h2>
                    </div>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                    <List/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
