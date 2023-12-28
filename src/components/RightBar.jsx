import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";

const RightBar = () => {
  const feedImage1 = require("../assets/py_1.jpg");
  const feedImage2 = require("../assets/py_2.jpg");
  const feedImage3 = require("../assets/py_3.jpg");
  const feedImage4 = require("../assets/py_4.jpg");
  const feedImage5 = require("../assets/py_5.jpg");
  const feedImage6 = require("../assets/py_6.jpg");


  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h5" fontWeight={100} mt={2} mb={2}>
          Your's Friend List
        </Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src={String(feedImage1)} />
          <Avatar alt="Travis Howard" src={String(feedImage2)} />
          <Avatar alt="Cindy Baker" src={String(feedImage3)} />
          <Avatar alt="Agnes Walker" src={String(feedImage4)} />
          <Avatar alt="Trevor Henderson" src={String(feedImage1)} />
        </AvatarGroup>
      <Typography variant="h5" fontWeight={100} mt={2} mb={2}>
        Your's Gallery List <ImageList col={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src={String(feedImage3)} alt=""/>
          </ImageListItem>
          <ImageListItem>
            <img src={String(feedImage4)} alt=""/>
          </ImageListItem>
          <ImageListItem>
            <img src={String(feedImage5)} alt=""/>
          </ImageListItem>
          <ImageListItem>
            <img src={String(feedImage6)} alt=""/>
          </ImageListItem>
        </ImageList>
      </Typography>
      <Typography variant="h5" fontWeight={100} mt={2} mb={2}>
        Your's Conversation
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Typography>
      </Box>

    </Box>
  );
};

export default RightBar;
