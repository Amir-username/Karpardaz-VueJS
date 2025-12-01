export type Advertise = {
  id: number;
  employer_id: number;
  title: string;
  position: string;
  gender: string;
  salary: string;
  job_group: string;
  description: string;
  city: string;
  experience: string;
  benefits: string[];
  technologies: string[];
  is_portfolio: boolean;
  is_remote: boolean;
  is_internship: boolean;
};
