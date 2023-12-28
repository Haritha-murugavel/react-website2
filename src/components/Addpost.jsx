import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import SendIcon from "@mui/icons-material/Send";

const StyleModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
  padding: "10px",
  gap: "5px",
  marginBottom: "10px",
});
const Addpost = () => {
  const feedImage6 = require("../assets/py_6.jpg");

  const [open, setOpen] = useState(false);
  return (
    <div>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 30,
          left: { xs: "calc(50% )", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyleModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={500} height={300} bgcolor={"background.default"} color={"text.primary"} borderRadius={5} p={3}>
          <Typography variant="h5" color={"gray"} textAlign={"center"}>
            Create Your Post
          </Typography>
          <UserBox>
            <Avatar
              alt="Remy Sharp"
              src={String(feedImage6)}
              sx={{ width: 40, height: 40 }}
            />
            <Typography fontWeight={500} variant="span">
              Haritha Murugavel
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            placeholder="Your's thought"
            variant="standard"
          />
          <Stack direction={"row"} mb={3} mt={3} gap={1}>
            <FileUploadIcon color="primary" />
            <AddToPhotosIcon color="secondary" />
            <InsertEmoticonIcon color="success" />
            <VideoChatIcon color="error" />
          </Stack>
          <Button variant="contained" fullWidth endIcon={<SendIcon />}>
            Post
          </Button>
        </Box>
      </StyleModal>
    </div>
  );
};

export default Addpost;
