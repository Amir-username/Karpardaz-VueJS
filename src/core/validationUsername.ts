export function validationUsername(userInput: string) {
  const errors: string[] = [];
  
  if (userInput.length < 4) errors.push("نام کاربری باید حداقل ۴ حرف باشد");
  if (userInput.length > 20)
    errors.push("نام کاربری نباید بیشتر از ۲۰ حرف باشد");
  if (!/\S+@\S+\.\S+/.test(userInput))
    errors.push("لطفا قالب ایمیل را رعایت کنید");

  return errors;
}
