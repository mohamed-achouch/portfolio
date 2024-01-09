import React,{ useRef } from 'react'
import '../assets/styles/contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine}from 'react-icons/ri'
import {BsWhatsapp}from 'react-icons/bs'
import emailjs from 'emailjs-com';

const Contact = ()=> {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_yvg82tn', 'template_tgkt6k7', form.current, 'ZCRYIZ__9hL-Y1_Ej').then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
     
  };
  return (
    <section id='contact'>
      <h5>get in touch</h5>
      <h2>contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
           <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mohamedachouch123@gmail.com</h5>
            <a href="mailto:mohamedachouch123@gmail.com" target="_blank">Send Message</a>
           </article>
           <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messanger</h4>
            <h5>mohamed achouch</h5>
            <a href="https://m.me/mohammedali.oviche" target="_blank">Send Message</a>
           </article>
           <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+212 682147043</h5>
            <a href="https://api.whatsapp.com/send?phone=0682147043" target="_blank">Send Message</a>
           </article>
        </div>
        {/*END OF CONTACT */}
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='subject' placeholder='Subject ' required />
          <input type="text" name='name' placeholder='Your name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id=""  rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact