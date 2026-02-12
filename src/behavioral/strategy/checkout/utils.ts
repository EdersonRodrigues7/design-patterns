import {PSP_NAME} from "./enums";
import {IPaymentProcessor} from "./interfaces";
import {Adyen, PayPal, Stripe, Square} from "./implementations";

// This function serves as a way to implement Dependency Injection
export function getPaymentProcessors(): Map<PSP_NAME, IPaymentProcessor> {
    return new Map<PSP_NAME, IPaymentProcessor>([
        [PSP_NAME.STRIPE, new Stripe()],
        [PSP_NAME.PAYPAL, new PayPal()],
        [PSP_NAME.ADYEN, new Adyen()],
        [PSP_NAME.SQUARE, new Square()]
    ]);
}