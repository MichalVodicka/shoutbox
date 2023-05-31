import { ReactElement} from "react";

type IProps = {
    name: string
    content: string
    created: string
    ip: string
    user_agent: string
}

const translateURL = (text: string): ReactElement[] => {
    const replacer = (str: string): ReactElement => {
        return <><a href={str}>{str}</a>{" "}</>
    }
    return [...text.split(' ')].map(chunk => {
        if (/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)/g.test(chunk)) {
            return replacer(chunk)
        }
        return <>`${chunk} `</>
    })
}

export const Message = ({name, content, created, ip, user_agent}: IProps) => {

    const daytime = new Date(parseInt(created)).toLocaleDateString()

    return (<div className={"message"}>
            <div className={"title"}>{name}</div>
            <div className={"content"}>{translateURL(content)}</div>
            <div className={"date"}>{daytime}<span className={'ip'}> , IP: {ip}</span></div>
            <div className={'user-agent'}>{user_agent}</div>
        </div>

    )

}
