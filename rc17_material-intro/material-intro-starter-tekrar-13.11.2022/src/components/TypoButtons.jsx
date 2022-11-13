import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const TypoButtons = () => {
  return (
    <>
      {/* // Bu container elemnti ile bootstrapteki gibi boşluklu yada kaplayacak şekilde yapabiliyoruz */}
      <Container maxWidth="md">
        {/* variant bu elementin ekranda hangi element olacağını gösterir. Sadece variant ıda kullanabiliriz. */}
        {/* component ise styleolarak(yani banckend de) hangi elementi olacağını gösterir */}
        {/* her componentin kendine ait bir props listesiva rve bunlara componentin olduğu en alttaki apı kısmından bakıyoruz. */}
        {/* ön tanımlı renkleri verebiliriz. */}
        <Typography
          variant="h4"
          component="h2"
          align="center"
          mt={4}
          color="error"
        >
          h1. Heading
        </Typography>

        {/* burada biz pragraf yaptık */}
        {/* (sx) propu ile normal javascript css ile inline olarak style verebiliyoruz. Bu propbları camelCase olarak azıyoruz. */}
        <Typography
          variant="body1"
          align="justify"
          mt={4}
          sx={{
            backgroundolor: "lightyellow",
            color: "#ccc",
            fontSize: "1.4rem",
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          repudiandae reprehenderit quod quas deserunt qui eius necessitatibus
          rerum modi praesentium!
        </Typography>

        {/* Consolu inceleiğimizde bu button elemeti span olarak görülecektir.Ve Ona göe style vermek gereklidir. */}
        <Typography
          variant="button"
          sx={{ display: "inline-block", marginTop: "1rem" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          laboriosam dolorum officiis corrupti ex adipisci fugit autem
          doloremque asperiores atque?
        </Typography>
      </Container>

      <Container>
        {/* burada bu buttonları style vermek için sarmallamayı box,slack gibi elementlerle yapabilirizve bunların farklı propbları olabilir ve buna bakamk gerekli style verirken  */}
        {/* burda widht verrdiğimiz için ortalama yapamıyoruz */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>

          {/* burda icon koymayı yaptık iconları import ederek. birde color probu ile renk verdik butonlara */}
          <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" color="secondary" endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default TypoButtons;
