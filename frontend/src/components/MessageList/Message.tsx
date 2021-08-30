type IProps = {name:string
    content:string
    created:string
}

export const Message = ({name, content,created}:IProps) =>{

    return(<div className={"message"}>
            <div className={"title"}>{name}</div>
            <div className={"content"}>{content}</div>
            <div className={"date"}>{created}</div>
        </div>

    )

}
