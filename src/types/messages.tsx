export type sendMessage = {
    /// function call like /name
    request: enumRequestType,
    /// content of the messag like the chosen name
    content?: string
}

export enum enumRequestType {
    Message = 0,
    List,
    Name,
    Join
}

export type receiveMessage = {
    request: enumRequestType,
    message?: string,
    room_list?: string[],
    error: string
}

export function createMessage(request: enumRequestType, content?: string) {
    var message = {
        request: request,
        content: content
    }
    return JSON.stringify(message)
}