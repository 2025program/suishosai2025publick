import React, { Suspense } from 'react';
import ClientEventPage from '@/components/event/event';
import { DevOnly } from '@/components/DevOnly';

const EventPage: React.FC = () => {
    return (
        <Suspense fallback={<div>読み込み中...</div>}>
            <DevOnly>
                <ClientEventPage />
            </DevOnly>
        </Suspense>
    );
};

export default EventPage;
