//styles the message, breaks apart from the app file
import React, { forwardRef } from 'react'
import { Card, CardContent, Typography } from "@material-ui/core";
import './Message.css';
// I should look up what ^ do

const Message = forwardRef(({ message, username }, ref) => {
    const isUser = username === message.username;
    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography
                        color="white"
                        variant="h5"
                        component="h2"
                        >
                            {!isUser && `${message.username || 'Unknown User' }: `} {message.message}
                        </Typography>
                </CardContent>
            </Card>  
        </div>     
    )
})

export default Message
