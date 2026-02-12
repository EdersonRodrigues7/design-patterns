import {PSP_NAME} from "./enums";
import {IPaymentProcessor} from "./interfaces";

export type PaymentData = {
    amount: number;
    currency: string;
    method: string;
    provider: PSP_NAME;
}

export type ProcessorResolver = (provider: PSP_NAME) => IPaymentProcessor | undefined;