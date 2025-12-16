export function validationPassword(userInput: string) {
  const errors: string[] = [];

  if (userInput.length < 8) errors.push("رمز عبور باید حداقل ۸ رقم باشد");
  if (userInput.length > 30) errors.push("رمز عبور نباید بیشتر از ۳۰ رقم باشد");
  if (!/[a-z]/.test(userInput))
    errors.push("رمز عبور باید حداقل یک حرف کوچک داشته باشد");
  if (!/[A-Z]/.test(userInput))
    errors.push("رمز عبور باید حداقل یک حرف بزرگ داشته باشد");
  if (!/\d/.test(userInput))
    errors.push("رمز عبور حداقل باید شامل یک عدد باشد");
  if (!/[@$!%*?&]/.test(userInput))
    errors.push("رمز عبور حداقل باید شامل یک حرف خاص باشد");

  return errors;
}
