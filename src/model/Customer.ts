export default class Customer {
    name: string;
    email: string;
    address: string;
    phoneNumber: string;

    constructor(name: string, email: string, address: string, phoneNumber: string) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

}