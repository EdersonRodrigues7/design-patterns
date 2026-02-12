import {PaymentData, ProcessorResolver} from "./custom-types";
import {PSP_NAME} from "./enums";
import {getPaymentProcessors} from "./utils";

class CheckoutUseCase {
    constructor(private resolveProcessor: ProcessorResolver) {}

    execute(data: PaymentData): void {
        const processor = this.resolveProcessor(data.provider);
        if (!processor) {
            throw new Error('Invalid payment processor');
        }
        processor.validate(data);
        processor.process(data);
    }
}

class CheckoutController {
    checkout(data: PaymentData): void {
        const processorsMap = getPaymentProcessors();
        const useCase = new CheckoutUseCase(
            (provider) => processorsMap.get(provider)
        );
        useCase.execute(data);
    }
}

function strategy(){
    const controller = new CheckoutController();
    controller.checkout({
        amount: 100,
        currency: 'CAD',
        method: 'CREDIT_CARD',
        provider: PSP_NAME.SQUARE,
    });
}

strategy();