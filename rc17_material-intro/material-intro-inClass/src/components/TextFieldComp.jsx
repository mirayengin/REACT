import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import  TextField  from "@mui/material/TextField";

import React from 'react'

const TextFieldComp = () => {
  return (
    <div>
      <Container>
        <Typography variant="h4" color="error" aling="center" mt={4}>
          TEXT FIELD
        </Typography>

        <Box>
          <TextField>

          </TextField>
        </Box>
      </Container>
      
    </div>
  )
}

export default TextFieldComp