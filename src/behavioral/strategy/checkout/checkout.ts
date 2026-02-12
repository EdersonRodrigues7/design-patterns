import {PaymentData} from "./custom-types";
import {PSP_NAME} from "./enums";
import {IPaymentProcessor} from "./interfaces";
import {getPaymentProcessors} from "./utils";

class CheckoutUseCase {
    constructor(
        private readonly paymentProcessors: Map<PSP_NAME, IPaymentProcessor>
    ){}

    execute(data: PaymentData): void {
        const processor = this.paymentProcessors.get(data.provider);
        if (processor) {
            processor.validate(data);
            processor.process(data);
        } else {
            throw new Error('Invalid payment processor');
        }
    }
}

class CheckoutController {
    checkout(data: PaymentData): void {
        const useCase = new CheckoutUseCase(getPaymentProcessors());
        useCase.execute(data);
    }
}

function checkout(){
    const controller = new CheckoutController();
    controller.checkout({
        amount: 100,
        currency: 'CAD',
        method: 'CREDIT_CARD',
        provider: PSP_NAME.STRIPE,
    });
}

checkout();