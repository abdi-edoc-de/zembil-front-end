import React from "react";

function LoginForm() {
  return (
    <form className="login__form" id="loginForm">
      {/* <!-- Form Title --> */}
      <h1 className="form__title">Sign In!</h1>
      {/* <!-- inputs Groups --> */}
      <div className="input__group">
        <label className="field">
          <input
            type="text"
            name="username"
            placeholder="Username"
            id="logInUsername"
            // v-model.trim="$v.loginName.$model"
          />
        </label>
        <span className="input__icon">
          <i className="bx bx-user"></i>
        </span>
        {/* <template v-if="$v.loginName.$error">
          <small className="input__error_message" v-if="!$v.loginName.required">
            Username can't be empty
          </small>
        </template> */}
      </div>
      <div className="input__group">
        <label className="field">
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="loginPassword"
            // v-model.trim="$v.loginPassword.$model"
          />
        </label>
        <span className="input__icon">
          <i className="bx bx-lock"></i>
        </span>
        <span className="showHide__Icon">
          <i className="bx bx-hide"></i>
        </span>
        {/* <template v-if="$v.loginPassword.$error">
      <small
        className="input__error_message"
        v-if="!$v.loginPassword.required"
        >Password can't be empty</small
      >
    </template> */}
      </div>
      <div className="form__actions"></div>
      {/* <!-- Login Button --> */}
      <button type="submit" className="submit-button" id="loginSubmitBtn">
        Sign in
      </button>
      {/* <v-btn color="accent" plain
    >forgot password?
    <v-btn text :to="{ name: 'forgot' }">here</v-btn></v-btn
  > */}
    </form>
  );
}

export default LoginForm;
