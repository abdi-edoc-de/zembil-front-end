import React from "react";
import {useForm} from 'react-hook-form'
import {loginSchema} from '../Validation/loginValidation';
import { yupResolver } from "@hookform/resolvers/yup";
import {login} from '../../../store/user'
import { useDispatch } from "react-redux";
function LoginForm() {
    const dispatch = useDispatch()
    const {register, handleSubmit,formState} = useForm({
      resolver:yupResolver(loginSchema)
    })

  const submit = (data) =>{
    dispatch(login(data.email,data.password))
    console.log(data, 'mannn')
  }
  return (
    <form onSubmit={handleSubmit(submit)} className="login__form" id="loginForm">
      {/* <!-- Form Title --> */}
      <h1 className="form__title">Sign In!</h1>
      {/* <!-- inputs Groups --> */}
      <div className="input__group">
        <label className="field">
          <input
            type="text"
            name="email"
            placeholder="email"
            id="email"
            {...register('email')}
            // v-model.trim="$v.loginName.$model"
          />
        </label>
        <p>{formState.errors.email?.message}</p>
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
            id="password"
            {...register('password')}

            // v-model.trim="$v.loginPassword.$model"
          />
        </label>
        <p>{formState.errors.password?.message} </p>

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
      <button  className="submit-button" id="loginSubmitBtn">
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
