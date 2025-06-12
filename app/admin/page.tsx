import Image from 'next/image';
import Form from '@/components/form/form';
import Announce from '@/components/announce/announce';
import Access from '@/components/access/access';
import TopSelect from '@/components/topselect/topselect';
import Footer from '@/components/footer/footer';
import { DevOnly } from '@/components/DevOnly';
import "./admin.css"

// Homeコンポーネント
export default function Develop() {

    return (
        <>
            <div className="testbox"></div>
            <Form />
            <div className="testbox"></div>
        </>
    );
};