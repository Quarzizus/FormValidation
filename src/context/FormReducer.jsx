export const formValues = {
  User: {
    value: null,
    status: null,
  },
  Name: {
    value: null,
    status: null,
  },
  Password: {
    value: null,
    status: null,
  },
  PasswordRepeat: {
    value: null,
    status: null,
  },
  Email: {
    value: null,
    status: null,
  },
  Phone: {
    value: null,
    status: null,
  },
  Checked: {
    status: false,
  },
  Validate: null,
};

const FormReducer = (state, action) => {
  switch (action.type) {
    case "User":
      return {
        ...state,
        User: action.payload,
      };
    case "Name":
      return {
        ...state,
        Name: action.payload,
      };
    case "Password":
      return {
        ...state,
        Password: action.payload,
      };
    case "PasswordRepeat":
      return {
        ...state,
        PasswordRepeat: action.payload,
      };
    case "Email":
      return {
        ...state,
        Email: action.payload,
      };
    case "Phone":
      return {
        ...state,
        Phone: action.payload,
      };
    case "Checked":
      return {
        ...state,
        Checked: {
          ...status["Checked"],
          status: action.payload,
        },
      };
    case "Validate":
      return {
        ...state,
        Validate: action.payload,
      };
    default:
      return state;
  }
};
export default FormReducer;
