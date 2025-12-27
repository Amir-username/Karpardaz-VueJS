export function validationName(
  userInput: string,
  type: "first name" | "last name" | "company name"
) {
  const errors: string[] = [];

  if (userInput.length < 3) {
    if (type === "first name") {
      errors.push("نام باید حداقل ۳ حرف باشد");
    } else if (type === "last name") {
      errors.push("نام خانوادگی باید حداقل ۳ حرف باشد");
    } else {
      errors.push("نام سازمان باید حداقل ۳ حرف باشد");
    }
  }
  if (userInput.length > 60)
    if (type === "first name") {
      errors.push("نام باید حداکثر ۶۰ حرف باشد");
    } else if (type === "last name") {
      errors.push("نام خانوادگی باید حداکثر ۶۰ حرف باشد");
    } else {
      errors.push("نام سازمان باید حداکثر ۱۰۰ حرف باشد");
    }
  return errors;
}
