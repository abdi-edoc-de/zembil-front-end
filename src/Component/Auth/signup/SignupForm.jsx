import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from '../Validation/registerValidation'
import { useDispatch } from "react-redux";
import {regiseter} from '../../../store/user'
import "../form.css"

function SignupForm(params) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema)
  })
  const dispatch = useDispatch()
  const submit = (data) => {
    dispatch(regiseter(data))
    console.log(data);
  }
  return (
    <form
      onSubmit={handleSubmit(submit)}
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
            name="userName"
            placeholder="Username"
            id="userName"
            {...register('userName')}
          // v-model.trim="$v.name.$model"
          />
        </label>
        <p className="warnning_">{errors.userName?.message}</p>
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
            {...register('fullName')}
          // v-model.trim="$v.fullName.$model"
          />
        </label>
        <p >{errors.fullName?.message}</p>
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
            {...register('email')}

          // v-model.trim="$v.email.$model"
          />
        </label>
        <p>{errors.email?.message}</p>
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
            {...register('phone')}
          />
        </label>
        <p>{errors.phone?.message}</p>


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
            {...register('password')}
          />
        </label>
        <p>{errors.password?.message}</p>
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
            {...register('confirmPassword')}
          />
        </label>
        <p>{errors.confirmPassword?.message}</p>
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
