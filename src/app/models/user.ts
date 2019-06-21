class Address {
  city: string;
  street: string;
  building: string;
  flatNo: string | null;
}
class Consents {
  newsletter: boolean;
  sms: boolean;
}
export class User {
  name: string;
  surname: string;
  email: string;
  phone: string | null;
  password: string;
  pet: 'dog' | 'cat' | 'other';
  address: Address = new Address();
  consents: Consents = new Consents();
}
