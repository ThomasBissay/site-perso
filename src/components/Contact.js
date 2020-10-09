import React from 'react';
import emailjs from 'emailjs-com';

import '../css/custom.scss';

function Contact() {

    const sendMail = (e) => {
        e.preventDefault();

        let template_params = {
            "reply_to": document.getElementById('contactMail').value,
            "from_name": document.getElementById('contactName').value,
            "subject": document.getElementById('objectMail').value,
            "message": document.getElementById('messageMail').value
        }
        emailjs.send('service_rka35tb', 'template_88gupsl', template_params, "user_UQsC4sQ8SqtaEyXnnf4Iv")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        document.getElementById('contactName').value = "";
        document.getElementById('contactMail').value = "";
        document.getElementById('objectMail').value = "";
        document.getElementById('messageMail').value = "";
        document.getElementById('return').innerText = "Thanks for your message !";
    }

    return (
        <div className="bgClean bg-dark row justify-content-center text-center">
            <div className="col-xl-3 col-lg-5 col-md-6 col-sm-8 col-xs-12 align-self-center bg-dark">
                <div className="contact">
                    <h1 className="mb-5 simple-title">Contact</h1>
                    <h5 className="mb-2 simple-text">Don't hesitate to send me a message for any request or question concerning my photos, my equipment
                        or a possible collaboration !</h5>
                    <h5 className="mb-5 simple-text">You can use the form, or my adress directly: thomas.bissay@epitech.eu</h5>
                    <h5 className="mb-5 simple-text" id="return"> </h5>
                    <form onSubmit={sendMail}>
                        <div className="form-group">
                            <input type="text" className="form-control mb-2" placeholder="Name"
                                   id="contactName" required/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control mb-2" placeholder="Email"
                                   id="contactMail" required/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control mb-2" placeholder="Object"
                                   id="objectMail" required/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control mb-3" rows="5" placeholder="Your message" id="messageMail" required/>
                        </div>
                        <div className="btnContainer">
                            <button type="submit" className="contactBtn">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;