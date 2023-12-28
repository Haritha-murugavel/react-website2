import { Box } from "@mui/material";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";
import Addpost from "./components/Addpost";
import { createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";

function App() {
  const [mode,setMode] = useState("light");
  const darkTheme = createTheme({
    palette:{
      mode:mode,
    }
  });
  return (
  <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar setMode={setMode} mode={mode}/>
        <Feed />
        <RightBar />
      </Stack>
      <Addpost />

    </Box>
    </ThemeProvider>
  );
}

export default App;
