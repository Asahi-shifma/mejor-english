import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  Users,
  BookOpen,
  MessageSquare,
  ArrowRight,
  X,
  Menu,
  ShieldCheck,
  ChevronDown,
  FileSpreadsheet,
} from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', goal: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: '完全初心者ですが受講できますか？',
      a: 'はい、大歓迎です！市販の参考書では難しすぎたり、何から始めればいいか分からない初心者の方にこそ、個人のレベルに合わせた完全オーダーメイドのカリキュラムが効果的です。',
    },
    {
      q: 'なぜ無料モニターを募集しているのですか？',
      a: '本格的なサービス展開に向けた実績作りや、実際の受講者様からのリアルなフィードバックをいただくため、限定5名様のみ完全無料で提供しております。',
    },
    {
      q: 'Google Meetの使い方が分からなくても大丈夫ですか？',
      a: '事前に接続方法を丁寧にサポートいたしますのでご安心ください。スマホやPCがあれば簡単に参加可能です。',
    },
    {
      q: '受講後の強引な勧誘などはありますか？',
      a: '一切ありません。モニター受講後、ご納得いただいた場合のみ継続をご検討いただければ幸いです。',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-extrabold text-xl tracking-tight text-slate-900">
              Mejor <span className="text-blue-600">English</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a
              href="#features"
              className="hover:text-blue-600 transition-colors"
            >
              特徴
            </a>
            <a
              href="#curriculum"
              className="hover:text-blue-600 transition-colors"
            >
              自作教材・シート
            </a>
            <a
              href="#monitor"
              className="hover:text-blue-600 transition-colors"
            >
              無料モニター概要
            </a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">
              FAQ
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              無料モニターに応募する
            </button>
          </div>

          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-3">
            <a
              href="#features"
              className="block py-2 text-slate-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              特徴
            </a>
            <a
              href="#curriculum"
              className="block py-2 text-slate-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              自作教材・シート
            </a>
            <a
              href="#monitor"
              className="block py-2 text-slate-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              無料モニター概要
            </a>
            <a
              href="#faq"
              className="block py-2 text-slate-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <button
              onClick={() => {
                setIsModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl shadow-md"
            >
              無料モニターに応募する
            </button>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>限定5名 | 完全無料モニター受付中</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
            海外大学に通う僕が実践する
            <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              「あなた専用」完全オーダーメイド
            </span>
            英語学習
          </h1>

          <p className="text-slate-600 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            市販の参考書をただ暗記していませんか？一人ひとりのレベルや目標に合わせた学習教材をその場で作成し、あなたが自走して英語を話せるようになるための個人コーチングをお届けします。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group"
            >
              今すぐ無料モニターに応募する（残5枠）
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#curriculum"
              className="w-full sm:w-auto bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold text-base px-8 py-4 rounded-xl transition-all text-center"
            >
              自作シートの詳細を見る
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />{' '}
              1対1個別オンライン
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />{' '}
              オリジナル自作教材
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />{' '}
              費用は完全0円（モニター）
            </span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="py-16 bg-white border-y border-slate-100"
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Mejor Englishが選ばれる理由
            </h2>
            <p className="text-slate-500 text-sm">
              一般的な一斉授業や高額スクールとは違う、徹底的な個別対応の仕組み。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                個人の進歩・レベルに合わせた教材
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                固定のテンプレートを使うのではなく、あなたの現在の実力や弱点、目標に合わせて、その都度最適な学習教材を完全オーダーメイドで作成します。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                実際の現場で使える生きた英語
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                海外大学のリアルな環境で培った、教科書には載っていない「ホントに使えるフレーズや学習法」をダイレクトにお伝えします。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                完全ゼロからの自走力を養成
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                レッスンが終わった後も、自分で継続して学習を進められるような「自走の仕組み」をコーチングを通じて身につけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM / SELF-MADE SHEET SECTION */}
      <section id="curriculum" className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">
              Original Materials
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1 mb-3">
              自作ロードマップ ＆ 管理シート
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              市販本にはない「継続と定着」に特化した独自の管理シートとロードマップをプレゼント。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center font-bold">
                  01
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    目標逆算型ロードマップ
                  </h3>
                  <p className="text-xs text-slate-500">
                    あなたのゴールから今やるべきことを可視化
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center font-bold">
                  02
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    日常会話フレーズ蓄積シート
                  </h3>
                  <p className="text-xs text-slate-500">
                    自分がよく使う言葉だけを効率的に覚える
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center font-bold">
                  03
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    自走学習進捗チェック表
                  </h3>
                  <p className="text-xs text-slate-500">
                    挫折せずに習慣化するためのログ管理
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <FileSpreadsheet className="w-24 h-24 text-white/10 absolute -right-4 -bottom-4" />
              <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm inline-block mb-4">
                受講特典
              </span>
              <h3 className="text-2xl font-bold mb-3">
                あなただけの専用スプレッドシートを作成
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                初回カウンセリング時に、受講者様のレベル・学習時間・目的に合わせた「完全専用管理シート」をその場で共同作成・プレゼントいたします。
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-blue-600 font-bold px-6 py-3 rounded-xl text-sm shadow-md hover:bg-blue-50 transition-colors"
              >
                シート付き無料モニターに応募
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MONITOR DETAILS */}
      <section id="monitor" className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-wider">
              Limited Offer
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mt-1">
              無料モニター詳細
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              本格サービス開始に向けた実績作りのため、限定5名様を完全無料でサポートします。
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700 mb-8 space-y-6">
            <div>
              <h3 className="font-bold text-base mb-3 text-emerald-400 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                無料モニターの内容
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>個別カウンセリング ＋ 本レッスン1回（完全無料）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Google Meetによる1対1のオンラインレッスン</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>
                    あなた専用のオーダーメイド学習シート・ロードマップ贈呈
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-700">
              <h4 className="font-bold text-sm text-slate-200 mb-2">
                ご応募の条件
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                受講後にご感想やフィードバックをいただける方（およびInstagramでのご紹介にご協力いただける方）を対象としております。
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-base px-8 py-4 rounded-xl transition-all shadow-lg"
            >
              無料モニターに応募する
            </button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1 mb-3">
              よくある質問
            </h2>
            <p className="text-slate-500 text-sm">
              受講に関する不安や気になる疑問にお答えします。
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="p-5 text-slate-600 text-sm bg-white border-t border-slate-100 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM CONTACT SECTION */}
      <section className="py-12 bg-slate-950 text-white text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-blue-400 font-bold tracking-widest text-xs mb-2">
            CONTACT
          </p>
          <h2 className="text-2xl font-bold mb-3">
            無料モニターのご応募・お問い合わせ
          </h2>
          <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
            ご質問やモニター応募は公式InstagramのDMよりお気軽にご連絡ください。
          </p>
          <a
            href="https://www.instagram.com/mejorenglish"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white px-6 py-3.5 rounded-full font-bold shadow-lg hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>InstagramでDMを送る（@あなたのインスタID）</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-white text-sm">Mejor English</span>
          </div>
          <p>© 2026 Mejor English. All rights reserved.</p>
        </div>
      </footer>

      {/* MODAL FORM */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  ご応募ありがとうございます！
                </h3>
                <p className="text-slate-600 text-sm mb-6">
                  確認後、24時間以内にご案内メールをお送りいたします。
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setIsModalOpen(false);
                  }}
                  className="bg-slate-900 text-white font-bold text-sm px-6 py-2.5 rounded-xl"
                >
                  閉じる
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  無料モニターに応募する
                </h3>
                <p className="text-slate-500 text-xs mb-6">
                  限定5名様。必要事項をご記入の上、送信してください。
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      お名前
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="山田 太郎"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      メールアドレス
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="example@gmail.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      現在の英語の悩み・目標
                    </label>
                    <textarea
                      rows="3"
                      placeholder="日常会話を話せるようになりたい、など"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600"
                      value={formData.goal}
                      onChange={(e) =>
                        setFormData({ ...formData, goal: e.target.value })
                      }
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3.5 rounded-xl transition-all shadow-md mt-2"
                  >
                    送信する
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
