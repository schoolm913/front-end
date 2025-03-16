export interface StaffI {
  employeeId: string;
  firstName: string;
  lastName: string;
  bloodGroup: string;
  dob: string;
  role: number;
  employmentStatus: number;
  dateOfJoining: string;
  workLocation: number;
  gender: number;
  address: AddressI;
  contactDetails: ContactDetails;
  dependentsDetails: DependentDetails[];
}

export interface AddressI {
  addressLineOne: string;
  addressLineTwo: string;
  city: string;
  county: string;
  country: number;
  postCode: string;
}

export interface ContactDetails {
  mobileNumber: number;
  personalMail: string;
}

export interface DependentDetails {
  name: string;
  relationShip: number;
  gender: number;
  dob: string;
}
