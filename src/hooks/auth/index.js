// api
import { postAuthSignInAPI, postAuthSignUpAPI } from "api/auth";

export const authSignIn = (options) => postAuthSignInAPI(options);

export const authSignUp = (options) => postAuthSignUpAPI(options);
