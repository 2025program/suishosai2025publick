const Privacy: React.FC = () => {

    return (
        <main className="p-8">
            <header className="mb-6">
                <h1 className="text-2xl">プライバシーポリシー</h1>
            </header>

            <section className="mb-6">
                <h2 className="text-xl mb-2">1. はじめに</h2>
                <p>
                    当サイトは、ユーザーのプライバシーを尊重し、個人情報の保護に努めています。本プライバシーポリシーは、当サイトが収集する情報、利用方法、およびユーザーの権利について説明します。
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl mb-2">2. 収集する情報</h2>
                <p>当サイトでは、以下の情報を収集します:</p>
                <ul className="list-disc ml-5">
                    <li>
                        クッキーを使用して、クッキー同意状態、サイドバーメニューのステータスを保持します。
                    </li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl mb-2">3. 情報の利用目的</h2>
                <p>
                    サイトの機能維持およびユーザー体験の向上のために利用します。
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl mb-2">4. 情報の共有と第三者提供</h2>
                <p>
                    当サイトは、情報を第三者に提供しません。ただし、法的義務がある場合はこの限りではありません。
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl mb-2">5. クッキーの使用</h2>
                <p>
                    <strong>同意状態保持クッキー</strong>: クッキー同意の状態を24時間保持します。
                </p>
                <p>
                    <strong>サイドバーメニューステータスクッキー</strong>: サイドバーメニューの展開状態を24時間保持します。
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl mb-2">6. 情報の保護</h2>
                <p>
                    当サイトは、適切なセキュリティ対策を講じ、個人情報を不正アクセスや漏洩から保護します。個人情報は、必要な期間のみ保持し、その後安全に削除します。
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl mb-2">7. ユーザーの権利</h2>
                <ul className="list-disc ml-5">
                    <li>クッキーを削除する権利。</li>
                    <li>クッキーの使用に対する同意を撤回する権利。</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl mb-2">8. プライバシーポリシーの変更</h2>
                <p>
                    当サイトは、必要に応じてプライバシーポリシーを変更することがあります。変更がある場合は、ウェブサイト上でお知らせします。
                </p>
            </section>

            <section>
                <h2 className="text-xl mb-2">9. お問い合わせ</h2>
                <p>
                    プライバシーポリシーに関するご質問やご懸念がございましたら、以下の連絡先までお問い合わせください。
                </p>
                <a href="/" className="taplink">お問い合わせフォーム</a>
            </section>
        </main>
    );
};

export default Privacy;
