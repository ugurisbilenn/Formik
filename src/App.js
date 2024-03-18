
import './App.css';
import { Formik, Field, Form } from 'formik';
function App() {
  return (
    <div className='App'>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: 'asdasd',
        lastName: 'asdasda',
        email: 'asdas@g.com',
        gender:'male',
        hobies:[],
        country:'tr',
       }}
      onSubmit={(values) => {
        
        console.log(values);
      }}
    >
      {
        ({handleSubmit,handleChange,values}) => {
          return (
          <Form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" placeholder="Jane" onChange={handleChange} value={values.firstName}/>
          <br/>
          <br/>
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" placeholder="Doe" onChange={handleChange} value={values.lastName}/>
        <br/>
          <br/>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          onChange={handleChange}
          value={values.email}
        />
          <br/>
          <br/>
          <label htmlFor="gender">Gender:</label>
          <br/>
          <span>Male</span>
          <input  type='radio' name="gender" 
          value="male" onChange={handleChange}
          checked={values.gender === "male"}
          />
          <span>Female</span>
          <input type='radio' name="gender" 
          value="female" onChange={handleChange}
          checked={values.gender === "female"}
          />
          
          <br/>
          <br/>

          <div>
            Football
            <input type='checkbox' name='hobies' value='Play Football' onChange={handleChange}/></div>
          <div>
            Basketball
            <input type='checkbox' name='hobies' value='Play Basketball' onChange={handleChange}/></div>
          <div>
            Tenis
            <input type='checkbox' name='hobies' value='Play Tenis' onChange={handleChange}/></div>
          
          
            <br/>
          <br/>
          <select name='country' onChange={handleChange}>
            <option value='tr'>Turkey</option>
            <option value='en'>England</option>
            <option value='usa'>USA</option>
            </select> 



          <br/>
          <br/>

        <button type="submit">Submit</button>
            <br/>
        {JSON.stringify(values)}
      </Form>
        )}
      }
    </Formik>
  </div>
  );
}

export default App;
