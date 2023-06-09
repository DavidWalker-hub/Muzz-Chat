import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";

const messages = [
  {
    message:
      "message1 A significantly longer message to test how multiple line messages may work",
    sender: "123456",
    recipient: "654321",
    timeStamp: new Date(),
  },
  {
    message: "message2",
    sender: "654321",
    recipient: "123456",
    timeStamp: new Date(),
  },
  {
    message: "message3",
    sender: "123456",
    recipient: "654321",
    timeStamp: new Date(),
  },
  {
    message: "message1",
    sender: "123456",
    recipient: "654321",
    timeStamp: new Date(),
  },
  {
    message: "message2",
    sender: "654321",
    recipient: "123456",
    timeStamp: new Date(),
  },
  {
    message: "message3",
    sender: "123456",
    recipient: "654321",
    timeStamp: new Date(),
  },
  {
    message: "message1",
    sender: "123456",
    recipient: "654321",
    timeStamp: new Date(),
  },
  {
    message: "message2",
    sender: "654321",
    recipient: "123456",
    timeStamp: new Date(),
  },
  {
    message: "message3",
    sender: "123456",
    recipient: "654321",
    timeStamp: new Date(),
  },
  {
    message: "message1",
    sender: "123456",
    recipient: "654321",
    timeStamp: new Date(),
  },
  {
    message: "message2",
    sender: "654321",
    recipient: "123456",
    timeStamp: new Date(),
  },
  {
    message: "message3",
    sender: "123456",
    recipient: "654321",
    timeStamp: new Date(),
  },
  {
    message: "message1",
    sender: "123456",
    recipient: "654321",
    timeStamp: new Date(),
  },
  {
    message: "message2",
    sender: "654321",
    recipient: "123456",
    timeStamp: new Date(),
  },
  {
    message: "message3",
    sender: "123456",
    recipient: "654321",
    timeStamp: new Date(),
  },
  {
    message: "message1",
    sender: "123456",
    recipient: "654321",
    timeStamp: new Date(),
  },
  {
    message: "message2",
    sender: "654321",
    recipient: "123456",
    timeStamp: new Date(),
  },
  {
    message: "message3",
    sender: "123456",
    recipient: "654321",
    timeStamp: new Date(),
  },
  {
    message: "message1",
    sender: "123456",
    recipient: "654321",
    timeStamp: new Date(),
  },
  {
    message: "message2",
    sender: "654321",
    recipient: "123456",
    timeStamp: new Date(),
  },
  {
    message: "message3",
    sender: "123456",
    recipient: "654321",
    timeStamp: new Date(),
  },
  {
    message:
      "message1A significantly longer message to test how multiple line messages may work test test test test test test test test test does this text show? 1111122222333334444455555666",
    sender: "123456",
    recipient: "654321",
    timeStamp: new Date(),
  },
  {
    message:
      "message2 significantly longer message to test how multiple line messages may work test test test test test test test test test does this text show? 1111122222333334444455555666",
    sender: "654321",
    recipient: "123456",
    timeStamp: new Date(),
  },
  {
    message: "message3 weird that longer messages change this",
    sender: "123456",
    recipient: "654321",
    timeStamp: new Date(),
  },
];

export const Chat: React.FC = () => {
  console.log("messages", messages);
  const userId = "123456";
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
              <TextField multiline maxRows={2} fullWidth />
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={1} pl={4}>
          <IconButton>
            <SendIcon sx={{ color: "rgb(251, 64, 108)" }} />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item container xs={10} overflow={"scroll"} sx={{ height: "100%" }}>
        <Grid item container direction={"column-reverse"}>
          {messages.map((message) => {
            const userMessage = message.sender === userId;
            return (
              <Typography
                alignSelf={userMessage ? "flex-end" : "flex-start"}
                sx={{
                  padding: 1,
                  marginX: 2,
                  borderRadius: userMessage
                    ? "12px 12px 0 12px"
                    : "12px 12px 12px 0",
                  maxWidth: "60%",
                  color: userMessage ? "white" : "black",
                  backgroundColor: userMessage ? "#fb406c" : "#d9d7d7",
                }}
              >
                {message.message}
              </Typography>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};
