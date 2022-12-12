import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.svg";
import { Link, useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import { useSelector } from "react-redux";
import { Formik, Form } from "formik";
import { TextField } from "@mui/material";
import * as yup from "yup";

//?Burda biz yazdığımız custom hook u çağırdık.
import useAutCall from "../hooks/useAuthCall";
import { useEffect } from "react";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";






//? Vereceğimiz schema yı buraya yazıyoruz.
const loginSchema = yup.object().shape({
  //! Default bir error mesajı var ama başka yazdırmak istersek email in içine ne olacaksa yazıyoruz.
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Please enter an email"),
  password: yup
    .string()
    .required("Please enter an password")
    .min(8, "Password must have min 8 chars")
    .max(12, "Please must have max 12 chars")
    //? küçük/büyük vs bir karakter için matches içine reganx yazıyoruz
    .matches(/\d+/, "Password must have a number")
    .matches(/[A-Z]+/, "Password must have a upper char")
    .matches(/[a-z]+/, "Password must have a lower char"),
});

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, error, loading } = useSelector((state) => state?.auth);
  const { login } = useAutCall()
  
  //? bunu stateleri güncelliyoruz dispatch ama sayfa ender olmuyordu bizde render olması ve yönlendirme için bunu kullandık
  useEffect(() => {
    if (currentUser) {
      navigate("/stock")
      toastSuccessNotify("Login Performed")
    }
  }, [currentUser])

  useEffect(() => {
    error && toastErrorNotify("Login Failed")
  }, [error])
  




  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} mb={3}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="secondary.light"
          >
            Login
          </Typography>

          <Formik
            
            //? İnputların ilk değerlerini belirtiyoruz.
            initialValues={{ email: "", password: "" }}

            //? Bir şema vereceksek bunu yazıyoruz.
            validationSchema={loginSchema}
            //? İlk parametresi form elementi içindeki inputların değerleri
            //? actions diğer bütün parametreler(handlesubmit gibi parametlerin hepsi)
            onSubmit={(values, actions) => {
              login(values)
              // navigate("/stock")
              //?form u resetler submitten sonra
              actions.resetForm();
              //? submit süresince butonu disapled yapar
              actions.setSubmitting(false);
            }}
          >
            {({
              values,
              isSubmitting,
              handleBlur,
              handleChange,
              touched,
              errors,
            }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    //!Formikten (initialValues) aldık
                    value={values.email}
                    //!Formikten aldık
                    onChange={handleChange}
                    onBlur={handleBlur}
                    //! email yoksa hata verme dokunduğunda
                    error={touched.email && Boolean(errors.email)}
                    //! helpertext için touched,errors,handleBluer gibi parametreler gereklidir.
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    label="Password"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    //!Formikten (initialValues) aldık
                    value={values.password}
                    //!Formikten aldık
                    onChange={handleChange}
                    onBlur={handleBlur}
                    //! email yoksa hata verme dokunduğunda
                    error={touched.password && Boolean(errors.password)}
                    //! helpertext için touched,errors,handleBluer gibi parametreler gereklidir.
                    helperText={touched.password && errors.password}
                  />
                </Box>
              </Form>
            )}
          </Formik>
          <LoadingButton
            type="submit"
            loading={loading}
            loadingPosition="center"
            variant="contained"
          >
            {" "}
            Submit
          </LoadingButton>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={10} sm={7} md={6}>
          <Container>
            <img src={image} alt="img" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
