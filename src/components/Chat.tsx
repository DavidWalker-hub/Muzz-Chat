import React, { useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { differenceInSeconds, format } from "date-fns";
import { useChat } from "../contexts/chat.context";

export const Chat: React.FC = () => {
  const userId = "123456";
  const contactId = "654321";

  const [typedMessage, setTypedMessage] = useState<string>("");
  const { sortedConversation, sendMessage } = useChat();

  const handleSendMessage = () => {
    const newMessage = {
      sender: userId,
      recipient: contactId,
      timeStamp: new Date(),
      message: typedMessage,
    };
    sendMessage(newMessage);
    setTypedMessage("");
  };

  return (
    <Grid
      container
      direction="column-reverse"
      justifyContent={"flex-start"}
      sx={{ height: "100%" }}
    >
      <Grid
        xs={1}
        item
        container
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ backgroundColor: "#fafafa", width: "100%", marginTop: 3 }}
      >
        <Grid item xs={10}>
          <Box pb={2} mr={3} pt={2}>
            <Paper elevation={3}>
              <TextField
                autoFocus
                multiline
                maxRows={2}
                fullWidth
                value={typedMessage}
                onChange={(e) => setTypedMessage(e.target.value)}
              />
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={1} pl={4}>
          <IconButton onClick={handleSendMessage}>
            <SendIcon sx={{ color: "rgb(251, 64, 108)" }} />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item container xs={10} overflow={"scroll"} sx={{ height: "100%" }}>
        <Grid item container direction={"column-reverse"}>
          {sortedConversation.map((message, i, messages) => {
            const isUserMessage = message.sender === userId;
            const timeGap = differenceInSeconds(
              message.timeStamp,
              messages[i + 1]?.timeStamp
            );
            const showTimeStamp = timeGap > 3600 || i === messages.length - 1;
            const groupedMessage =
              timeGap < 20 && message.sender === messages[i + 1].sender;
            return (
              <React.Fragment key={`${message.sender} - ${message.timeStamp}`}>
                <Typography
                  alignSelf={isUserMessage ? "flex-end" : "flex-start"}
                  sx={{
                    padding: 1,
                    marginX: 2,
                    marginTop: groupedMessage ? "2px" : "20px",
                    borderRadius: isUserMessage
                      ? "12px 12px 0 12px"
                      : "12px 12px 12px 0",
                    maxWidth: "60%",
                    color: isUserMessage ? "white" : "black",
                    backgroundColor: isUserMessage ? "#fb406c" : "#d9d7d7",
                  }}
                >
                  {message.message}
                </Typography>
                <Typography
                  display={showTimeStamp ? "block" : "none"}
                  align="center"
                  sx={{ fontSize: 13, marginTop: 2 }}
                >
                  {format(message.timeStamp, "EEEE do HH:mm")}
                </Typography>
              </React.Fragment>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};
