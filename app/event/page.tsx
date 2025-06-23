import React, { Suspense } from 'react';
import ClientEventPage from '@/components/event/event';

const EventPage: React.FC = () => {
    return (
        <Suspense fallback={<div>読み込み中...</div>}>
            <ClientEventPage />
        </Suspense>

    );
};

export default EventPage;
