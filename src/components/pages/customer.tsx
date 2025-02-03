import { useState } from "react";
import Customer from "../../model/Customer.ts";

export function CustomerPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");


    function assignNewData() {

        const newCustomer = new Customer(name, email, address, contact);


        console.log("Customer name:",newCustomer.name);
        console.log("Customer email:",newCustomer.email);
        console.log("Customer address:",newCustomer.address);
        console.log("Customer phoneNumber:",newCustomer.phoneNumber);
        console.log("create github url");

    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-blue-600 text-center mb-4">Customer Form</h2>

                <div className="mb-3">
                    <input
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        placeholder="Address"
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="number"
                        placeholder="Contact"
                        onChange={(e) => setContact(e.target.value)}
                    />
                </div>

                <button
                    className="w-full bg-blue-600 text-black font-bold py-2 rounded-lg hover:bg-blue-700 transition"
                    onClick={assignNewData}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}
