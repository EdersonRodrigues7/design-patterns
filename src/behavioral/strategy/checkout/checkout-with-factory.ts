import {PaymentData} from "./custom-types";
import {PSP_NAME} from "./enums";
import {Adyen, PaymentProcessorFactory, PayPal, Square, Stripe} from "./implementations";

class CheckoutUseCase {
    constructor(private factory: PaymentProcessorFactory) {}

    execute(data: PaymentData): void {
        const processor = this.factory.getProcessor(data.provider);
        processor.validate(data);
        processor.process(data);
    }
}

class CheckoutController {
    checkout(data: PaymentData): void {
        const factory = new PaymentProcessorFactory();
        factory.register(PSP_NAME.ADYEN, new Adyen());
        factory.register(PSP_NAME.PAYPAL, new PayPal());
        factory.register(PSP_NAME.STRIPE, new Stripe());
        factory.register(PSP_NAME.SQUARE, new Square());

        const useCase = new CheckoutUseCase(factory);
        useCase.execute(data);
    }
}

function checkoutWithFactory(){
    const controller = new CheckoutController();
    controller.checkout({
        amount: 100,
        currency: 'CAD',
        method: 'CREDIT_CARD',
        provider: PSP_NAME.ADYEN,
    });
}

checkoutWithFactory();