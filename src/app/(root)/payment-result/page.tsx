'use client';

export default function PaymentResultPage() {
    return (
        <div className="max-w-xl mx-auto mt-20 px-6 text-center">
            <h1 className="text-3xl font-bold text-green-600">
                Payment Successful 🎉
            </h1>
            <p className="mt-4 text-lg">Thank you for your purchase!</p>
            <p className="mt-2 text-gray-600">
                A confirmation email has been sent to your inbox.
            </p>
        </div>
    );
}
