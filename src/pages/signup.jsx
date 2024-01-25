import React from 'react'
import '../styles/signup.css'
// import bloodlogo from "../assets/bloodlogo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
function Signup() {
  return (
    <>
     <section className='text'>
     <div className='text1'>
     <h3>Net Blood Safe Lives</h3>
     <p>Our Mission is to fill the gap between blood <br /> donors and recipients, Providing a seamless<br /> and efficient encounter for both parties. A reliable <br /> source, providing you the best experience.</p>
     </div>
      <div className='hey'>
      <div className='text21'>
      <h3 className='signup'>Sign Up</h3>
      <br />
     <form action="#">
     <label for="Role">Choose A Role:</label>
      <select id="Role" name="Role">
        <option value="User">User</option>
        <option value="Hospital">Hospital</option>
      </select>
      <br />
      <label for="FullName">Full name:</label><br/>
     <input type="text" name="FullName" id="FullName" placeholder='FullName' required/> <br/>
     <label for="Age">Age:</label><br/>
     <input type="text" name="Age" id="Age" placeholder='Age' required/> <br/>
     <label for="Phone number">Phone Number:</label><br/>
     <input type="text" name="Phone number" id="Phone number" placeholder='Phone number' required/> <br />
     <label for="Location">Location:</label><br/>
     <input type="text" name="Location" id="Location" placeholder='Location' required/> <br/>
     <label for="Email">Email:</label><br/>
    <input type="text" name="Email" id="Email" placeholder='Email' required  />  <br />
     <label for="PassWord">PassWord:</label><br/>
     <input type="password" name="Password" id="Password" placeholder='Password' required /> <br />
     <br />
     <label for="Blood Group">Choose A Blood Group:</label>
      <select id="Blood Group" name="Blood Group">
        <option value="A Positive">A+</option>
        <option value="A Negative">A-</option>
        <option value="B Positive">B+</option>
        <option value="B Negative">B-</option>
        <option value="AB Positive">AB+</option>
        <option value="AB Negative">AB-</option>
        <option value="O Positive">O+</option>
        <option value="O Negative">O-</option>
        <option value="None">None</option>
      </select>
      <br />
      <br />
     <input type="checkbox" className='check'/> Agree To Terms and Conditions <br />
    
     <button className='sign'>Create Account</button>
     <br />
     <p>already have an Account? <a href="#" className='link'>Log in here!</a></p>

    </form>

     </div>
      </div>
     </section>
    </>
  )
}

export default Signup
