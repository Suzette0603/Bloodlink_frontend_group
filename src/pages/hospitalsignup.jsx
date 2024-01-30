import React from 'react'
import '../styles/hospitalsignup.css'

function Signup2() {
  return (
  <>
  <section className='text'>
     <div className='text1'>
     <h3>Net Blood Safe Lives</h3>
     <p>Our Mission is to fill the gap between blood <br /> donors and recipients, Providing a seamless<br /> and efficient encounter for both parties. A reliable <br /> source, providing you the best experience.</p>
     </div>
      <div className='text2'>
      <h3 className='signup'>Sign Up</h3>
      <br />
     <form action="#">
      <label for="Hospital's Name">Hospital's Name:</label><br/>
     <input type="text" name="HospitalName" id="HospitalName" placeholder='HospitalName' required/> <br/>
     <label for="Hospital's Code">Hospital's Code:</label><br/>
     <input type="text" name="Hospital's Code" id="Hospital's Code" placeholder="Hospital's Code"  required/> <br/>
     <label for="Location">Location:</label><br/>
     <input type="text" name="Location" id="Location" placeholder='Location' required/> <br/>
     <label for="Email">Email:</label><br/>
    <input type="text" name="Email" id="Email" placeholder='Email' required  />  <br />
     <label for="PassWord">PassWord:</label><br/>
     <input type="password" name="Password" id="Password" placeholder='Password' required /> <br />
     <br />
     <input type="checkbox" className='check'/> Agree To Terms and Conditions <br />
    
     <button className='sign'>Create Account</button>
     <br />
     <p>already have an Account? <a href="#" className='link'>Log in here!</a></p>

    </form>

     </div>
     </section>
  </>
  )
}

export default Signup2
