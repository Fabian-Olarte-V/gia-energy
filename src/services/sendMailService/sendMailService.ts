import { SendMailPayload } from "@/interfaces/contact/contact";


export async function sendMailService(payload: SendMailPayload): Promise<{ success: boolean;}> {
    const BASE_URL = "https://xixg6j57v5.execute-api.us-east-1.amazonaws.com/v1/send-mail";
    
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        body: JSON.stringify(payload),
        });

        if (!response.ok) return { success: false };
        return { success: true };

    } catch (error: any) {
        return { success: false };
    }
}
