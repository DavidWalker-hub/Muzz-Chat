import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";
import { IContact } from "../types/contact";

interface Props {
  contact: IContact;
}

export const Contact: React.FC<Props> = ({ contact }) => {
  return (
    <ListItem disableGutters key={contact.id}>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar>{contact.avatar}</Avatar>
        </ListItemAvatar>
        <ListItemText>{contact.name}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
};
