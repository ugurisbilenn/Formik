
import './App.css';
import { Formik, Field, Form } from 'formik';
function App() {
  return (
    <div className='App'>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={(values) => {
        
        console.log(values);
      }}
    >
      {
        ({handleSubmit,handleChange}) => {
          return (
          <Form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" placeholder="Jane" onChange={handleChange}/>
          <br/>
          <br/>
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" placeholder="Doe" onChange={handleChange}/>
        <br/>
          <br/>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          onChange={handleChange}
        />
          <br/>
          <br/>
        <button type="submit">Submit</button>
      </Form>
        )}
      }
    </Formik>
  </div>
  );
}

export default App;
