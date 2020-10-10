import React, { useState } from "react";
import { useForm } from "react-hook-form";
let Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  const [contactinfo, setcontactinfo] = useState([]);
  const onSubmit = data => setcontactinfo(data);
  return (
    <div className="contact">
      <p class="display-3">Feed back</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group">
        <label>Email</label>
          <input
            class="form-control"
          type="text"
            name="Email"
            placeholder="example@gmail.com"
          ref={register({
            required: "The email is not valid ",
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "The email is not Valid",
            },
          })}
        />
        {errors.Email && <span class="text-danger " role="alert">{errors.Email.message}</span>}
        <br />
        </div>
        <div class="form-group">

        <label>Feed Back</label>
          <textarea
            class="form-control"
            
            name="FeedBack"
            placeholder="Good Anime"
          ref={register({
            required: true,
            minLength: { value: 10, message: "The message is too Short" },
            maxLength: {
              value: 40,
              message: "the provide message is too Long ",
            },
          })}
        />
          {errors.FeedBack && <span class="text-danger " role="alert">{errors.FeedBack.message}</span>}
          </div>
          <button class="btn btn-primary btn-lg btn-block">Submit</button>
      </form>
    </div>
  );
};
export default Contact;
