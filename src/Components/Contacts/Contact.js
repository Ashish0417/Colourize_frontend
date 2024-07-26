import React from 'react'
import './Contact.css'
import message_icon from '../../assets/forward-message.png'
import mail_icon from '../../assets/mail.png'
import phone_icon from '../../assets/phone.png'
import location_icon from '../../assets/location.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "98496c22-8466-4245-bbdf-bb3aa0a596b3");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



    return (
        <div className='contact'>
            <div className='contact-col'>
                <h3>
                We Value Your Feedback<img src={message_icon} alt=''/>
                </h3>
                <p>
                We'd love to hear from you! Whether you have a question, encountered an issue, or just want to share your experience with our image colorization service, feel free to reach out. Your feedback helps us improve and provide the best possible service.
                </p>
                <br/>
                <p>Please fill out the form, and we'll get back to you as soon as possible.</p>
                <ul>
                    <li><img src={mail_icon} alt=''/>ashishkalgutkar0@gmail.com</li>
                    <li><img src={phone_icon} alt=''/>+999999999999</li>
                    <li><img src={location_icon} alt=''/>Karnataka,Karwar,India</li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type='text' name='name' placeholder='Enter your name' required/>
                    <label>Phone Number</label>
                    <input type='tel' name='phone' placeholder='Enter your phone number' required/>
                    <label>Write your message here</label>
                    <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact