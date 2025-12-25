import axios from "axios";
import { BASE_URL } from "../../api-config";

export async function fetchJobSeekerSignup(
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  password: string
) {
  const res = await axios.post(`${BASE_URL}/jobseekers/`, {
    firstname: firstName,
    lastname: lastName,
    phonenumber: phoneNumber,
    email: email,
    password: password,
  });
  const data = await res.data;
  console.log(data);
}
