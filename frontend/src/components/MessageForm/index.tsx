import * as React from "react";
import {SyntheticEvent, useState} from "react";
import {useMutation} from "urql";


const MessageMutation = `
  mutation ($name: String!, $content: String!) {
    message (name: $name, content: $content) {
        name
        content
        created_at
    }
  }
`;

export const MessageForm = () => {

    const [name, setName] = useState();
    const [msg, setMsg] = useState();
    const [error, setError] = useState();
    const handleNameChange = (ev: SyntheticEvent) => setName(ev.target.value)
    const handleMsgChange = (ev: SyntheticEvent) => setMsg(ev.target.value)
    const handleSubmit = () => {
        const error = [];
        if (!name || name.length < 1) {
            error.push("Please tell us your name")
        }
        if (!msg || msg.length < 1) {
            error.push("Please tell something")
        }
        if (error.length > 0) {
            return setError(error)
        }
        setError(null)
        return newMessage({name, content: msg})
    }
    const [_, updateMessage] = useMutation(MessageMutation);
    const newMessage = ({name, content}) => {
        const variables = {name, content: content};
        updateMessage(variables).then(result => {
            if (result.error) {
                const err = result.error.graphQLErrors.map(el=>el.message)
                setError(err)
            }
            setError(null)
        });

    };

    return (
        <div className={'message-form'}>
            <div className={'form'}>
                <p>Your message to the world: </p>
                <textarea onChange={handleMsgChange}>{msg}</textarea>
            </div>
            <div className={'name'}>
                <p>Name/Title: </p>
                <input type={'text'} minLength={3} maxLength={200} onChange={handleNameChange}/>
            </div>

            <a className={'submit'} onClick={handleSubmit}>Shout out!</a>
            {error && <div className={'error'}>Your message was NOT send because <ul>
                {error.map(err => <li>{err}</li>)}
            </ul></div>}
        </div>
    )
}
