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

    const [name,setName] = useState();
    const [msg,setMsg] = useState();
    const handleNameChange = (ev:SyntheticEvent) => setName(ev.target.value)
    const handleMsgChange = (ev:SyntheticEvent) => setMsg(ev.target.value)
    const handleSubmit = ()=>{
        console.log(msg)
        console.log(name)
        newMessage({name,content:msg})
        console.log('sent')
    }
    const [_, updateMessage] = useMutation(MessageMutation);
    const newMessage = ({ name, content }) => {

            const variables = { name, content: content };
            updateMessage(variables).then(result => {
                // The result is almost identical to `updateTodoResult` with the exception
                // of `result.fetching` not being set.
                // It is an OperationResult.
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
                <input type={'text'} minLength={3} maxLength={200} onChange={handleNameChange} />
            </div>
            <div className={'submit'}>
                <button type={"submit"} onClick={handleSubmit}>Shout out!</button>
            </div>
        </div>
    )
}
