export function validationName(
  userInput: string,
  type: "first name" | "last name"
) {
  const errors: string[] = [];

  if (userInput.length < 4) {
    if (type === "first name") {
      errors.push("نام باید حداقل ۴ حرف باشد");
    } else {
      errors.push("نام خانوادگی باید حداقل ۴ حرف باشد");
    }
  }
  if (userInput.length > 60)
    if (type === "first name") {
      errors.push("نام باید حداکثر ۶۰ حرف باشد");
    } else {
      errors.push("نام خانوادگی باید حداکثر ۶۰ حرف باشد");
    }
  return errors;
}
