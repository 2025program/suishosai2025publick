import Image from 'next/image';
import "./homepage.css"
import Form from '@/components/form/form';
import Announce from '@/components/announce/announce';
import Access from '@/components/access/access';
import TopSelect from '@/components/topselect/topselect';
import Footer from '@/components/footer/footer';
import { DevOnly } from '@/components/DevOnly';


// Homeコンポーネント
export default function Home() {

  return (
    <>
      <div className="body">
        <div className="hidden-x-side">

          {/** ヘッダー */}
          <section
            className="headtop"
          >
            <div className="headtop-leftarea">
              <div className="headtop-left">

                <div className="headtop-themelogo">
                  <picture>
                    <source
                      media="(min-width:768px)"
                      srcSet="/welcome/logo.png"
                    />
                    <Image
                      className="headtop-sp img"
                      src="/welcome/logo.png"
                      alt=""
                      width={900}
                      height={850}
                      priority
                    />
                  </picture>
                </div>

                <div className="headtop-change">
                  <picture>
                    <source
                      media="(min-width:768px)"
                      srcSet="/welcome/themepc.png"
                    />
                    <Image
                      className="headtop-sp img"
                      src="/welcome/themesp.png"
                      alt="neo"
                      width={180}
                      height={1164}
                      priority
                    />
                  </picture>
                </div>

              </div>
            </div>

            <div className="headtop-right">
              <picture>
                <source
                  media="(min-width:1024px)"
                  srcSet="/welcome/rightpc.png"
                />
                <source
                  media="(min-width:660px)"
                  srcSet="/welcome/rightpd.png"
                />
                <Image
                  className="headtop-right-sp img"
                  src="/welcome/rightsp.png"
                  alt=""
                  width={3000}
                  height={2000}
                  priority
                />
              </picture>
            </div>

            <a href="/attention" className='payment-btn'>お支払いについて</a>

          </section>

          <div className="mid_header">
            <div className="headerbox_top">
              <div className="headerbox_left"></div>
              <div className="headerbox_right"></div>
              <div className="headerbox_titlearea headerbox_search">
                <h1 className=''>SEARCH</h1>
              </div>
            </div>
            <TopSelect />
            <div className="headerbox_top">
              <div className="headerbox_left"></div>
              <div className="headerbox_right"></div>
              <div className="headerbox_titlearea headerbox_form">
                <h1 className=''>FORM</h1>
              </div>
            </div>
            <DevOnly>
              <Form />
            </DevOnly>
            <div className="headerbox_top">
              <div className="headerbox_left"></div>
              <div className="headerbox_right"></div>
              <div className="headerbox_titlearea headerbox_news">
                <h1 className=''>NEWS</h1>
              </div>
            </div>
            <Announce />
            <div className="headerbox_top">
              <div className="headerbox_left"></div>
              <div className="headerbox_right"></div>
              <div className="headerbox_titlearea headerbox_access">
                <h1 className=''>ACCESS</h1>
              </div>
            </div>
            <Access />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};