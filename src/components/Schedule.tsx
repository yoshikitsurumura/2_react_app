import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Schedule = () => {
  const timeSlots = [
    "1コマ目: 17:00〜17:50",
    "2コマ目: 18:00〜18:50",
    "3コマ目: 19:00〜19:50",
    "4コマ目: 20:00〜20:50"
  ];

  return (
    <AnimatedSection id="schedule" className="reveal">
      <div className="container">
        <h2>時間割（固定制＋振替OK）</h2>
        <motion.p 
          className="note"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          各コマ50分＋10分休憩／最大21時終了／振替可能
        </motion.p>
        <div className="schedule-table">
          {timeSlots.map((slot, index) => (
            <motion.div 
              key={slot}
              className="time-slot"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              {slot}
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Schedule;
