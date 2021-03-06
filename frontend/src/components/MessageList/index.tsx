import {useQuery} from 'urql';
import {useEffect} from 'react';
import {Message} from "./Message";

const MessageListQuery = ` {
      message{
        name
        content
        created_at
        ip
        user_agent
      }
}
`;

export const MessageList = () => {
    const [result, reexecuteQuery] = useQuery({
        query: MessageListQuery,
        pause: true,
    });

    useEffect(() => {
        if (result.fetching) return;

        // Set up to refetch in one second, if the query is idle
        const timerId = setTimeout(() => {
            reexecuteQuery({requestPolicy: 'network-only'});
        }, 1000);
        return () => clearTimeout(timerId);
    }, [result.fetching, reexecuteQuery]);

    return (
        <div className={'message-box'}>
            {result.data && result.data.message.map((el)=>{
            return <Message name={el.name} content={el.content} created={el.created_at} ip={el.ip} user_agent={el.user_agent} />
        })
            }
        </div>
    )
    // ...
};
