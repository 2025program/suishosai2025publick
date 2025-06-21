import React, { Suspense } from 'react';
import ClientEventPage from '@/components/event/event';
import { DevOnly } from '@/components/DevOnly';
import Footer from '@/components/footer/footer';

const EventPage: React.FC = () => {
    return (
        <Suspense fallback={<div>読み込み中...</div>}>   
            <ClientEventPage />   
            <Footer></Footer>
        </Suspense>

    );
};

export default EventPage;
