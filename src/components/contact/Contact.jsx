import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillInstagram} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = React.useState(false);
  const sendEmail = (e) => {  
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_x3l8ugc', 'k005kxi', form.current, 'JJqFqVCTgrGUxzaGG')
    .then((result)=>
    {
      alert("Email sent successfully");
      setLoading(false);
    }, (error)=>
    {
      alert('failed to send email , please try again later,Thanks');
      setLoading(false);
    });
    

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>khankariparag12@gmail.com</h5>
            <a href="mailto:khankariparag12@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <AiFillInstagram className='contact__option-icon'/>
            <h4>linkedin</h4>
            <h5>Parag Khankari</h5>
            <a href="https://www.linkedin.com/in/parag-khankari-5bb458200/" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Github</h4>
            <h5>Github</h5>
            <a href="https://github.com/pkhankari9990" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
  <input type="text" name='from_name' placeholder='Your Full Name' required />
  <input type="email" name='from_email' placeholder='Your Email' required />
  <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
  <button type='submit' className='btn btn-primary' disabled={loading}>
    {loading ? 'Sending...' : 'Send Message'}
  </button>
</form>

      </div>
    </section>
  )
}

export default Contact