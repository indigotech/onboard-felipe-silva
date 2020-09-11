export const validateDate = (date: string) => {
  const dateTester = /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/;
  const todayDate = new Date();
  const yearMonthDay = date.split('-');
  const birth = new Date(
    Number(yearMonthDay[0]),
    Number(yearMonthDay[1]) - 1,
    Number(yearMonthDay[2]),
  );
  return dateTester.test(date) && birth <= todayDate;
};

export const validateEmail = (email: string) => {
  const emailTester = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return emailTester.test(email);
};

export const validatePassword = (password: string) => {
  const passwordTester = /(?=.{7,})(?=.*[0-9])(?=.*[a-z])|(?=.{7,})(?=.*[0-9])(?=.*[A-Z])/;
  return passwordTester.test(password);
};

export const validatePhone = (phone: string) => {
  const phoneTester = /^[0-9]*$/;
  return phoneTester.test(phone) && phone.length === 9;
};
