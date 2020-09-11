export const validateDate = (val: string) => {
  const dateTester = /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/;
  const todayDate = new Date();
  const yearMonthDay = val.split('-');
  const birth = new Date(
    Number(yearMonthDay[0]),
    Number(yearMonthDay[1]) - 1,
    Number(yearMonthDay[2]),
  );
  if (dateTester.test(val) && birth <= todayDate) {
    return true;
  } else {
    return false;
  }
};

export const validateEmail = (val: string) => {
  const emailTester = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (emailTester.test(val)) {
    return true;
  } else {
    return false;
  }
};

export const validatePassword = (val: string) => {
  const passwordTester = /(?=.{7,})(?=.*[0-9])(?=.*[a-z])|(?=.{7,})(?=.*[0-9])(?=.*[A-Z])/;
  if (passwordTester.test(val)) {
    return true;
  } else {
    return false;
  }
};

export const validatePhone = (val: string) => {
  const phoneTester = /^[0-9]*$/;
  if (phoneTester.test(val) && val.length === 9) {
    return true;
  } else {
    return false;
  }
};
