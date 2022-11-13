import React, { useState } from 'react'
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import  Box  from "@mui/material/Box";
import TextField  from "@mui/material/TextField";

const TextFieldComp = () => {
  const [error, setError] = useState(false)


  return (
    <div>
      <Container>
        <Typography variant='h4' color=" error" align='center' mt={4}>
          TEXT FIELD
        </Typography>
        <Box sx={{ mt: 4 , textAlign:"center"}}>
          {/* helperText probu bize yanlış giriş yapıldığında measaj almamızı sağlar */}
          {/* error ise yanlış olduğunda kırmızı yapar */}
          <TextField id="email" label="Email" placeholder='Enter your email' fullWidth error={error} helperText={error && "Incorrect email format"} />
          {/* margin probuyla inputlar arasındaki aralığı default değer olan değerlerle belirleyebiliyoruz (normal,dense,none) gibi */}
          <TextField margin="normal" id="password" label="Password" placeholder='Enter your password' fullWidth error={error} helperText={error && "Incorrect email format"} />

          <Button variant="contained" color="warning" sx={{mt:3}} >
          Submit
          </Button>


        </Box>

         </Container>
    </div>
  )
}

export default TextFieldComp



//? textfiled bir input elementi materialuı da