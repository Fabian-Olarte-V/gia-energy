export interface ServiceOption {
        value: string;
        label: string;
}

export interface FormData {
    selectedService: string;
    name: string;
    city: string;
    phone: string;
    email: string;
}

export interface SendMailPayload {
    name: string;
    phone: string;
    email: string;
    city: string;
    selectedService: string;
}
