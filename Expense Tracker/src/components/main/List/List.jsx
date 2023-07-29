import React, { useContext } from "react";
import {
  List as MUIList,
  ListItem,
  Slide,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import { ExpenseTrackerContext } from "../../../context/context";
import { Delete, MoneyOff } from "@mui/icons-material";
const List = () => {
  const {deleteTransaction, transactions} = useContext(ExpenseTrackerContext);
  
  return (
    <div style={{ height: "150px", overflow: "auto" }}>
      <MUIList dense={false}>
        {transactions.map((transaction) => (
          <Slide
            direction="down"
            in
            mountOnEnter
            unmountOnExit
            key={transaction.id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  style={
                    transaction.type === "Income"
                      ? { color: "#fff", backgroundColor: "green" }
                      : {
                          color: "white",
                          backgroundColor: "red",
                        }
                  }>
                  <MoneyOff />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={transaction.category}
                secondary={`$${transaction.amount}- ${transaction.date}`}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={()=>deleteTransaction(transaction.id)}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Slide>
        ))}
      </MUIList>
    </div>
  );
};

export default List;
