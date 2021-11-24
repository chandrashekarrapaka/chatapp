import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App=()=>{
    return(
        <ChatEngine height="100vh" 
        projectID="d4add656-7b41-463a-b114-8e5f9cefedda"
         userName="Chandu" 
         userSecret="secret"
         renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        />


    );
};

export default App;
