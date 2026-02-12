import {IPaymentProcessor, IPaymentProcessorFactory} from "./interfaces";
import {PaymentData} from "./custom-types";
import {PSP_NAME} from "./enums";

export class Stripe implements IPaymentProcessor {
    process(data: PaymentData): void {
        // Specific logic
        return;
    }

    validate(data: PaymentData): void {
        // Specific logic
        return;
    }
}

export class PayPal implements IPaymentProcessor {
    process(data: PaymentData): void {
        // Specific logic
        return;
    }

    validate(data: PaymentData): void {
        // Specific logic
        return;
    }
}

export class Adyen implements IPaymentProcessor {
    process(data: PaymentData): void {
        // Specific logic
        return;
    }

    validate(data: PaymentData): void {
        // Specific logic
        return;
    }
}

export class Square implements IPaymentProcessor {
    process(data: PaymentData): void {
        // Specific logic
        return;
    }

    validate(data: PaymentData): void {
        // Specific logic
        return;
    }
}

export class PaymentProcessorFactory implements IPaymentProcessorFactory {
    private processors = new Map<PSP_NAME, IPaymentProcessor>();

    register(name: PSP_NAME, processor: IPaymentProcessor): void {
        this.processors.set(name, processor);
    }

    getProcessor(provider: PSP_NAME): IPaymentProcessor {
        const processor = this.processors.get(provider);
        if (!processor) {
            throw new Error(`Unknown provider: ${provider}`);
        }
        return processor;
    }
}