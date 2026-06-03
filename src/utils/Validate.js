const validateData = (userName, email, password, isSignIn) => {


  if(!isSignIn) {
    const isValidUserName = /^[a-zA-Z0-9_-]{3,16}$/.test(userName);

    if(!isValidUserName) return "Please enter valid Username";
  }

  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if(!isValidEmail) return "Please enter valid Email.";
  if(!isValidPassword) return "Please enter valid Password.";

  return null;
}

export default validateData;