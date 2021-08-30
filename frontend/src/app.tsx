import * as React from 'react';
import {MessageList} from './components/MessageList'

import './index.scss'
import {MessageForm} from "./components/MessageForm";

const App = () => {

    return (
        <React.Fragment>
            <div className={"title"}>Hope you're ready to shout!</div>
            <div className={"main"}>
                <MessageList from={1} limit={3} />
                <MessageForm/>
            </div>

        </React.Fragment>
    )
}
export default App;
