import {PaymentData} from "./custom-types";
import {PSP_NAME} from "./enums";

export interface IPaymentProcessor {
    validate(data: PaymentData): void;
    process(data: PaymentData): void;
}

export interface IPaymentProcessorFactory {
    getProcessor(provider: PSP_NAME): IPaymentProcessor;
}