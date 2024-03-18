import { Formik,useFormik, Field, Form } from 'formik';

import validationSchema from './validation';

const Signup = () => {
    const {handleSubmit,values,handleChange,errors,touched,handleBlur} = useFormik({
        initialValues: {
          
          email: '',
          password:'',
          passwordconfirm:'',
        },
        onSubmit: values => {
          console.log(values);
        },
        validationSchema,
      });
      console.log(errors);

  return (
    <div>
      <h1>Sign Up</h1>
    
    <form onSubmit={handleSubmit}>
 
  <label htmlFor="email">Email</label>
  <input
    id="email"
    name="email"
    placeholder="jane@acme.com"
    type="email"
    onChange={handleChange}
    value={values.email}
    onBlur={handleBlur}
  />
   {errors.email && touched.email && <div>{errors.email}</div>}
   <br/>
   <br/>
   <label htmlFor="password">Password</label>
  <input
    id="password"
    name="password"
    placeholder="password"
    type="password"
    onChange={handleChange}
    onBlur={handleBlur}
    
  />
  {errors.password && touched.password && <div>{errors.password}</div>}
   <br/>
   <br/>
   <label htmlFor="passwordconfirm">Confirm Password</label>
  <input
    id="passwordconfirm"
    name="passwordconfirm"
    placeholder="passwordconfirm"
    type="password"
    onChange={handleChange}
    onBlur={handleBlur}
    
  />
    {errors.passwordconfirm && touched.passwordconfirm && <div>{errors.passwordconfirm}</div>}
   <br/>
   <br/>

  <button type="submit">Submit</button>
      <br/>
  {JSON.stringify(values)}
</form>
    </div>
  )
}

export default Signup
