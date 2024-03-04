import { ContactMethod } from "./ContactMethod";
import { PostalAddress } from "./PostalAddress";


export interface Person {
  givenName?: string;
  familyName?: string;
  dateOfBirth?: string;
  placeOfBirth?: string;
  postalAddresses: PostalAddress[]; 
  contactMethods: ContactMethod[];
}