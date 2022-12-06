import React, { useState } from "react";
import { ContactFormTitle } from "@/data";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const dispatch = useDispatch();
  const { subTitle, title, description } = ContactFormTitle;
  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  // const spin = useSelector((state) => state.spin);

  const onChangeForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setformdata({ ...formdata, [name]: value });
  };

  const Submit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT_CONTACT_FORM", payload: formdata });
  };
  return (
    <section className="commonSection ContactPage">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 className="sub_title">{subTitle}</h4>
            <h2 className="sec_title">{title}</h2>
            <p className="sec_desc">{description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-sm-12 col-md-10 offset-md-1">
            <form
              // action="#"
              // method="post"
              className="contactFrom"
              id="contactForm"
              onSubmit={Submit}
            >
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form required"
                    type="text"
                    name="firstname"
                    id="f_name"
                    placeholder="First Name"
                    onChange={onChangeForm}
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form required"
                    type="text"
                    name="lastname"
                    id="l_name"
                    placeholder="Last Name"
                    onChange={onChangeForm}
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form required"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    onChange={onChangeForm}
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form"
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    onChange={onChangeForm}
                  />
                </div>
                <div className="col-lg-12 col-sm-12">
                  <textarea
                    className="input-form required"
                    name="message"
                    id="con_message"
                    placeholder="Write Message"
                    onChange={onChangeForm}
                  ></textarea>
                </div>
              </div>

              <button
                className="common_btn red_bg"
                type="submit"
                id="con_submit"
              >
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
