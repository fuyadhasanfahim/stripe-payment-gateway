'use client';

import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { loadStripe } from '@stripe/stripe-js';
import {
    EmbeddedCheckout,
    EmbeddedCheckoutProvider,
} from '@stripe/react-stripe-js';
import { AxeIcon } from 'lucide-react';
import { useCallback } from 'react';

export default function Buy({ id }: { id: string }) {
    const stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
    );

    const fetchClientSecret = useCallback(async () => {
        try {
            const response = await fetch('/api/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });
            const data = await response.json();

            if (data?.error) {
                throw new Error('Something went wrong!');
            }

            return data.client_secret;
        } catch (error) {
            throw error;
        }
    }, [id]);

    const options = { fetchClientSecret };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Purchase</Button>
            </DialogTrigger>
            <DialogContent className="h-[90vh] overflow-y-auto md:max-w-screen-xl">
                <DialogHeader>
                    <DialogTitle>
                        <div className="flex items-center gap-2">
                            <AxeIcon />
                            <span className="text-xl font-semibold">
                                eStore
                            </span>
                        </div>
                    </DialogTitle>
                    <EmbeddedCheckoutProvider
                        options={options}
                        stripe={stripePromise}
                    >
                        <EmbeddedCheckout />
                    </EmbeddedCheckoutProvider>
                </DialogHeader>

                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
