import React from "react";

function SignupForm(params) {
  return (
    <form
      //   @submit.prevent="AttemptSignUp"
      className="sign-up__form"
      id="signUpForm"
    >
      {/* <!-- Form Title --> */}
      <h1 className="form__title">Sign Up!</h1>
      {/* <!-- inputs Groups --> */}
      <div className="input__group">
        <label className="field">
          <input
            type="text"
            name="username"
            placeholder="Username"
            id="signUpUsername"
            // v-model.trim="$v.name.$model"
          />
        </label>
        <span className="input__icon">
          <i className="bx bx-user"></i>
        </span>
        {/* <template v-if="$v.name.$error">
          <small className="input__error_message" v-if="!$v.name.required">
            Username can't be empty
          </small>
        </template> */}
      </div>
      <div className="input__group">
        <label className="field">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            id="name"
            // v-model.trim="$v.fullName.$model"
          />
        </label>
        <span className="input__icon">
          <i className="bx bx-user"></i>
        </span>
        {/* <template v-if="$v.fullName.$error">
          <small className="input__error_message" v-if="!$v.fullName.required">
            Name can't be empty
          </small>
        </template> */}
      </div>
      <div className="input__group">
        <label className="field">
          <input
            type="text"
            name="email"
            placeholder="Email@example.com"
            id="signUpEmail"
            // v-model.trim="$v.email.$model"
          />
        </label>
        <span className="input__icon">
          <i className="bx bx-at"></i>
        </span>
        {/* <template v-if="$v.email.$error">
          <small className="input__error_message" v-if="!$v.email.required">
            Email can't be empty
          </small>
          <small className="input__error_message" v-if="!$v.email.email">
            Invalid email
          </small>
        </template> */}
      </div>
      <div className="input__group">
        <label className="field">
          <input
            type="text"
            name="phone"
            // v-model.trim="$v.phone.$model"
            placeholder="0911......"
            id="phone"
          />
        </label>
        <span className="input__icon">
          <i className="bx bx-at"></i>
        </span>
        {/* <template v-if="$v.phone.$error">
          <small className="input__error_message" v-if="!$v.phone.required">
            phonenumber can not be empty
          </small>
        </template> */}
      </div>
      <div className="input__group">
        <label className="field">
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="signUpPassword"
            // v-model.trim="$v.password.$model"
          />
        </label>
        <span className="input__icon">
          <i className="bx bx-lock"></i>
        </span>
        <span className="showHide__Icon">
          <i className="bx bx-hide"></i>
        </span>
        {/* <template v-if="$v.password.$error">
          <small className="input__error_message" v-if="!$v.password.required">
            Password is required.
          </small>
          <small className="input__error_message" v-if="!$v.password.minLength">
            Password length should be greater than 5 characters.
          </small>
        </template> */}
      </div>
      <div className="input__group confirm__group">
        <label className="field">
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            id="signUpConfirmPassword"
            // v-model.trim="$v.repeatPassword.$model"
          />
        </label>
        <span className="input__icon">
          <i className="bx bx-lock"></i>
        </span>
        <span className="showHide__Icon">
          <i className="bx bx-hide"></i>
        </span>
        {/* <template v-if="$v.repeatPassword.$error">
          <small
            className="input__error_message"
          >
            Passwords must be identical
          </small>
        </template> */}
      </div>
      <button type="submit" className="submit-button" id="signUpSubmitBtn">
        Sign Up
      </button>
    </form>
  );
}

export default SignupForm;
