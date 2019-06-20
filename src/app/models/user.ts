class Address {
  city: string;
  street: string;
  building: string;
  flatNo: string;
}
class Consents {
  newsletter: boolean;
  sms: boolean;
}
export class User {
  name: string;
  surname: string;
  email: string;
  phone: string;
  password: string;
  pet: string;
  address: Address = new Address();
  consents: Consents = new Consents();
}
