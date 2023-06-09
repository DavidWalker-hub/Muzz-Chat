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
import { IMessage } from "../types/message";
import { differenceInSeconds, format } from "date-fns";

const messages: IMessage[] = [
  {
    message:
      "message1 A significantly longer message to test how multiple line messages may work",
    sender: "123456",
    recipient: "654321",
    timeStamp: new Date("06-09-2023 12:00"),
  },
  //   {
  //     message: "message2",
  //     sender: "654321",
  //     recipient: "123456",
  //     timeStamp: new Date("06-09-2023 14:02"),
  //   },
  {
    message: "message3",
    sender: "123456",
    recipient: "654321",
    timeStamp: new Date("06-09-2023 12:02:10"),
  },
  {
    message: "message1",
    sender: "123456",
    recipient: "654321",
    timeStamp: new Date("06-09-2023 14:03:30"),
  },
  {
    message: "message2 timestamped",
    sender: "654321",
    recipient: "123456",
    timeStamp: new Date("06-09-2023 14:06:30"),
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
    timeStamp: new Date("06-08-2023 14:00"),
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
          {messages.map((message, i, messages) => {
            const isUserMessage = message.sender === userId;
            const timeGap = differenceInSeconds(
              messages[i + 1]?.timeStamp,
              message.timeStamp
            );
            const showTimeStamp = timeGap > 3600 || i === messages.length - 1;
            const groupedMessage =
              timeGap < 20 && message.sender === messages[i + 1].sender;
            return (
              <>
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
                  {format(message.timeStamp, "EEEE do HH:mm")}
                </Typography>
                <Typography
                  display={showTimeStamp ? "block" : "none"}
                  align="center"
                  sx={{ fontSize: 13, marginTop: 2 }}
                >
                  {format(message.timeStamp, "EEEE do HH:mm")}
                </Typography>
              </>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};
