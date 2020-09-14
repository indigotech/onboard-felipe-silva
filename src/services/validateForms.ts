export const validateDate = (date: string) => {
  const dateTester = /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/;
  const todayDate = new Date();
  const yearMonthDay = date.split('-');
  const birth = new Date(
    Number(yearMonthDay[0]),
    Number(yearMonthDay[1]) - 1,
    Number(yearMonthDay[2]),
  );
  if (dateTester.test(date) && birth <= todayDate) {
    return {boolean: dateTester.test(date) && birth <= todayDate};
  } else {
    return {
      boolean: dateTester.test(date) && birth <= todayDate,
      error: 'Invalid Date',
    };
  }
};

export const validateEmail = (email: string) => {
  const emailTester = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (emailTester.test(email)) {
    return {boolean: emailTester.test(email)};
  } else {
    return {boolean: emailTester.test(email), error: 'Invalid e-mail'};
  }
};

export const validatePassword = (password: string) => {
  const passwordTester = /(?=.{7,})(?=.*[0-9])(?=.*[a-z])|(?=.{7,})(?=.*[0-9])(?=.*[A-Z])/;
  if (passwordTester.test(password)) {
    return {boolean: passwordTester.test(password)};
  } else {
    return {
      boolean: passwordTester.test(password),
      error:
        'Password must contain 7 digits and at least one number and one letter',
    };
  }
};

export const validatePhone = (phone: string) => {
  const phoneTester = /^[0-9]*$/;
  if (phoneTester.test(phone) && phone.length === 9) {
    return {boolean: phoneTester.test(phone) && phone.length === 9};
  } else {
    return {boolean: phoneTester.test(phone), error: 'Invalid phone number'};
  }
};
