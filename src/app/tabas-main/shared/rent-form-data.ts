export class RentFormData {
    user: {
        name: String;
        email: string;
        phoneNumber: string;
        document: string;
    };
    timestamp: {
        init: string;
        end: string;
    };
    rentValues: {
        min: number;
        max: number;
    };
    locationInformation: {
        zipCode: string;
        address: string;
        neightborhood: string;
        city: string;
        state: string;
        country: string;
    }
}