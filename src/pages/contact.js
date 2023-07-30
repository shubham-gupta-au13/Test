import Header from "../components/header";

const Contact = function ({pageName}) {

    console.log(pageName)
  return (
    <>
      
      <Header pageName={pageName} />
      <section className="contactMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121783.25513738228!2d78.24012721778013!3d17.472789139238255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9376606b4b2b%3A0xc642d4a3cb68f689!2sRagni&#39;s%20Kitchen!5e0!3m2!1sen!2sin!4v1689147051394!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gmap"
          ></iframe>
        </section>

        <section className="contact-us">

            
                  <div className="contact-col">
                    <div>
                        <i className="fa fa-home"></i>
                        <span>
                            <h5>XYZ Road, ABC Building</h5>
                            <p>Kanpur, UP</p>
                        </span>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <span>
                            <h5>+91 7878787657</h5>
                            <p>Monday to Friday, 10AM to 6PM</p>
                        </span>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <span>
                            <h5>gshubham934@gmail.com</h5>
                            <p>Email us Your Query</p>
                        </span>
                    </div>
                  </div>

                    <div className="contact-col">
                        <form action="https://formspree.io/f/mrgwgvbq" method="POST">
                            <input type="text" name="UserName" placeholder="Enter Your Name" required />
                            <input type="email" name="Email" placeholder="Enter Your Email" required />
                            <input type="text" name="Subject" placeholder="Enter Your Subject" required />
                            <textarea rows="8" name="Message" placeholder="Message" required></textarea>
                            <input type="submit" value="SEND" className="hero-btn" />
                        </form>
                    </div>
            

            
        </section>
    </>
  );
};

export default Contact;
