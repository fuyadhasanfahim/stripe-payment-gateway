import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t-2 padding-x padding-y bg-accent">
            <div className="container flex justify-between text-muted-foreground">
                <div>
                    <p>
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                <div className="flex gap-3 items-center">
                    <Link href={'/terms'} className="hover:text-primary">
                        Terms
                    </Link>
                    <Link
                        href={'/privacy-policy'}
                        className="hover:text-primary"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href={'/cookie-policy'}
                        className="hover:text-primary"
                    >
                        Cookie Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
}
