import React, { ReactNode } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Divider, Drawer, Grid, List, Tab, Tabs } from "@mui/material";
import { contacts } from "../data/contacts";
import { Contact } from "./Contact";
import { useChat } from "../contexts/chat.context";

interface Props {
  children?: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const drawerWidth = 240;
  const { userId, setUserId } = useChat();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "rgb(251, 64, 108)" }}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: `${drawerWidth}px`,
              }}
            >
              Muzz Chat
            </Typography>
            {/* Purely for the purpose of sending messages back to the user */}
            <Tabs
              sx={{ minWidth: 200 }}
              // indicatorColor="secondary"
              TabIndicatorProps={{ sx: { color: "white" } }}
              value={userId}
              onChange={(e, value) => {
                setUserId(value);
              }}
            >
              <Tab label="user 1" value={"123456"} sx={{ color: "white" }} />
              <Tab label="user 2" value={"654321"} sx={{ color: "white" }} />
            </Tabs>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="left"
          open
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Box>
            <Grid
              container
              justifyContent={"space-between"}
              alignItems={"center"}
              height={64}
            >
              <Grid item xs={12}>
                <Typography textAlign={"center"} variant="h5">
                  Contacts
                </Typography>
              </Grid>
            </Grid>
            <Divider />
            <List sx={{ width: "100%" }}>
              {contacts.map((contact) => (
                <Contact contact={contact} key={contact.id} />
              ))}
            </List>
          </Box>
        </Drawer>
        <Box
          sx={{
            flexGrow: 1,
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
            height: "calc(100vh - 64px)",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};
