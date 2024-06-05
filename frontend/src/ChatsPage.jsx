// import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
import {PrettyChatWindow} from 'react-chat-engine-pretty'


// const ChatsPage = (props) => {
//     const chatProps = useMultiChatLogic(
//         '7315d101-bb45-40eb-959f-fd4f36a0b07e',
//         props.user.username,
//         props.user.secret
//     );

//     return (
//         <div style={{ height: '100vh' }}>
//             <MultiChatSocket {...chatProps} />
//             <MultiChatWindow {...chatProps} sytle={{ height: '100%' }} />
//         </div>
//     )
// }

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }} >
            <PrettyChatWindow
                projectId='7315d101-bb45-40eb-959f-fd4f36a0b07e'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )
}

export default ChatsPage;