interface Teacher = {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolen;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
};
