import { Box, Button, TextField } from '@mui/material';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phoneNumber: Yup.string().required('Phone number is required').min(10, 'Phone number must be at least 10 characters').max(10, 'Phone number must be at most 10 characters'),
  message: Yup.string().required('message is required'),
});


function App() {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Box sx={{display:'flex', width:'100%',justifyContent:'center',height:'100vh',backgroundColor:'pink'}}>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {formik => (
        <form
          onSubmit={formik.handleSubmit}
          style={{ backgroundColor: 'white', display: 'flex', textAlign: 'center', flexDirection: 'column', width: '40%', marginTop: '5%', paddingInline: '20px' }}
        >
          <h2>Contact us</h2>
          <Field name="firstName" as={TextField} label="First name" variant="outlined" sx={{marginTop:'15px'}} />
          <ErrorMessage name="firstName" component="div" style={{color:'red'}}/>

          <Field name="lastName" as={TextField} label="Last name" variant="outlined" sx={{marginTop:'15px'}} />
          <ErrorMessage name="lastName" component="div"  style={{color:'red'}}/>

          <Field name="email" as={TextField} label="Email Address" variant="outlined" sx={{marginTop:'15px'}} />
          <ErrorMessage name="email" component="div" style={{color:'red'}}/>

          <Field name="phoneNumber" as={TextField} label="Phone number" variant="outlined" sx={{marginTop:'15px'}} />
          <ErrorMessage name="phoneNumber" component="div" style={{color:'red'}}/>

          <Field name="message" as="textarea" rows="10" cols="50" placeholder="message" style={{marginTop:'15px'}} />
          <ErrorMessage name="message" component="div" style={{color:'red'}}/>

          <Button type="submit" variant="outlined" disabled={formik.isSubmitting} sx={{marginTop:'15px'}} >
            Submit
          </Button>
        </form>
      )}
    </Formik>
    </Box>
  );
}


export default App;