export enum ApplicationStates {
  INITIAL = "INITIAL",
  LOGIN_STARTED = "LOGIN_STARTED",
  LOGIN_COMPLETE = "LOGIN_COMPLETE",
  LOGIN_FAILED = "LOGIN_FAILED",
  REGISTRATION_STARTED = "REGISTRATION_STARTED",
  REGISTRATION_COMPLETE = "REGISTRATION_COMPLETE",
  REGISTRATION_FAILED = "REGISTRATION_FAILED",
  EXPENSE_SUBMIT_STARTED = "EXPENSE_SUBMIT_STARTED",
  EXPENSE_SUBMIT_COMPLETE = "EXPENSE_SUBMIT_COMPLETE",
  EXPENSE_SUBMIT_FAILED = "EXPENSE_SUBMIT_FAILED"
}

export const initialState = {
  email: "",
  password: "",
  status: ApplicationStates.INITIAL
};

export const LogInStartedState = () => ({
  status: ApplicationStates.LOGIN_STARTED
});

export const LogInCompleteState = (uid: string) => ({
  password: undefined as undefined,
  uid: uid,
  status: ApplicationStates.LOGIN_COMPLETE
});

export const LogInFailedState = () => ({
  uid: undefined as undefined,
  status: ApplicationStates.LOGIN_FAILED
});

export const LogOutState = () => ({
  email: "",
  password: "",
  uid: undefined as undefined,
  status: ApplicationStates.INITIAL
});

export const RegistrationStartedState = () => ({
  status: ApplicationStates.REGISTRATION_STARTED
});

export const RegistrationCompleteState = (uid: string) => ({
  password: undefined as undefined,
  uid: uid,
  status: ApplicationStates.REGISTRATION_COMPLETE
});

export const RegistrationFailedState = () => ({
  uid: undefined as undefined,
  status: ApplicationStates.REGISTRATION_FAILED
});
