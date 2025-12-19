export function validationRepeatedPass(
  repPassword: string,
  originalPassword: string
) {
  const errors: string[] = [];
  if (repPassword !== originalPassword) {
    errors.push("رمز عبور تکرار شده اشتباه است");
  }
  return errors;
}
