export function validationPhoneNumber(userInput: string) {
  const errors: string[] = [];

  if (!/^09\d{9}$/.test(userInput))
    errors.push("لطفا شماره تلفن همراه را در قالب صحیح وارد کنید");

  return errors;
}
