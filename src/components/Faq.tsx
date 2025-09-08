import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Faq = () => {
  const faqItems = [
    {
      question: "対象学年は？",
      answer: "小学生から高校生、大学受験生、社会人の方まで幅広く対応しています。一人ひとりの目標に合わせたカリキュラムを作成します。"
    },
    {
      question: "授業の録画はありますか？",
      answer: "はい、全ての授業は録画され、専用のポータルからいつでも見返すことが可能です。復習にご活用ください。"
    },
    {
      question: "振替のルールは？",
      answer: "授業開始の24時間前までにご連絡いただければ、月2回まで無料で振替が可能です。急な体調不良や予定変更にも柔軟に対応します。"
    },
    {
      question: "支払い方法は？",
      answer: "現在は銀行振込と各種QRコード決済に対応しております。今後、クレジットカードや口座振替にも対応予定です。"
    }
  ];

  return (
    <AnimatedSection id="faq" className="reveal">
      <div className="container">
        <h2>よくある質問</h2>
        {faqItems.map((item, index) => (
          <motion.div 
            key={index}
            className="faq-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h4>{item.question}</h4>
            <p>{item.answer}</p>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Faq;
