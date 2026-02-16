import { Suspense } from 'react';
import GenerateClient from './GenerateClient';

export const dynamic = 'force-dynamic';

export default function Generate() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <GenerateClient />
        </Suspense>
    );
}

