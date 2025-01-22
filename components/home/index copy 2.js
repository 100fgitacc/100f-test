import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Section = ({ id, title, children, onInView, isVisible }) => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // Следим за нижним краем экрана
  });

  const { ref, inView } = useInView({
    triggerOnce: true,  // Вызывается только один раз
    rootMargin: "0px 0px -80% 0px", // Триггерится, когда нижняя часть секции на 100% попадает в область видимости
    onChange: (inView) => {
      if (inView && onInView) onInView(); // Проверка, что onInView существует
    },
  });

  return (
    <div
      ref={(node) => { sectionRef.current = node; ref(node); }}
      id={id}
      style={{
        minHeight: '600px',
        margin: '250px 0',
        border: '1px solid red',
        opacity: isVisible ? 1 : 0, // Применяем анимацию для видимости
        transition: 'opacity 0.5s ease-in-out',
        display: isVisible ? 'block' : 'none', // Скрываем секцию, если она не видна
      }}
    >
      {title && <h2>{title}</h2>}
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { scrollYProgress, index })
      )}
    </div>
  );
};

const AnimatedParagraph = ({ index, children, scrollYProgress, onAnimationComplete }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: index * 0.1, // Используем разный threshold для каждого параграфа
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]); // Увеличение текста при скролле

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  // Используем onAnimationComplete для завершения анимации
  const handleAnimationComplete = () => {
    if (!hasAnimated) return;
    if (onAnimationComplete) {
      onAnimationComplete();
    }
  };

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ delay: index * 1.5, duration: 1.2 }}
      style={{ scale, minHeight: '100px', padding: '20px' }}
      onAnimationComplete={handleAnimationComplete}
    >
      {children}
    </motion.p>
  );
};

const App = () => {
  const [animationCompleted1, setAnimationCompleted1] = useState(false);
  const [animationCompleted2, setAnimationCompleted2] = useState(false);
  const [animationCompleted3, setAnimationCompleted3] = useState(false);
  const [animationCompleted4, setAnimationCompleted4] = useState(false);

  const [isSection2Visible, setIsSection2Visible] = useState(false);
  const [isSection3Visible, setIsSection3Visible] = useState(false);
  const [isSection4Visible, setIsSection4Visible] = useState(false);
  const [isSection5Visible, setIsSection5Visible] = useState(false);

  const handleAnimationComplete1 = () => {
    setAnimationCompleted1(true);
    setIsSection2Visible(true);  // Показываем "Section 2" после завершения анимации первой секции
  };

  const handleAnimationComplete2 = () => {
    setAnimationCompleted2(true);
    setIsSection3Visible(true);  // Показываем "Section 3" после завершения анимации второй секции
  };

  const handleAnimationComplete3 = () => {
    setAnimationCompleted3(true);
    setIsSection4Visible(true);  // Показываем "Section 4" после завершения анимации третьей секции
  };

  const handleAnimationComplete4 = () => {
    setAnimationCompleted4(true);
    setIsSection5Visible(true);  // Показываем "Section 5" после завершения анимации четвертой секции
  };

  return (
    <div>
      <Section id="intro" isVisible={true}>
        <p style={{ textAlign: "center", fontSize: "24px", opacity: 0.5 }}>
          Scroll down to start animations...
        </p>
      </Section>

      {/* Section 1 */}
      <Section id="section1" title="Section 1" onInView={() => {}} isVisible={true}>
        <AnimatedParagraph index={0}>This is the content of Section 1 - Paragraph 1</AnimatedParagraph>
        <AnimatedParagraph index={1}>This is the content of Section 1 - Paragraph 2</AnimatedParagraph>
        <AnimatedParagraph index={2} onAnimationComplete={handleAnimationComplete1}>
          This is the content of Section 1 - Paragraph 3
        </AnimatedParagraph>
      </Section>

      {/* Section 2 */}
      <Section id="section2" title="Section 2" isVisible={isSection2Visible}>
        <AnimatedParagraph index={0}>This is the content of Section 2 - Paragraph 1</AnimatedParagraph>
        <AnimatedParagraph index={1}>This is the content of Section 2 - Paragraph 2</AnimatedParagraph>
        <AnimatedParagraph index={2} onAnimationComplete={handleAnimationComplete2}>
          This is the content of Section 2 - Paragraph 3
        </AnimatedParagraph>
      </Section>

      {/* Section 3 */}
      <Section id="section3" title="Section 3" isVisible={isSection3Visible}>
        <AnimatedParagraph index={0}>This is the content of Section 3 - Paragraph 1</AnimatedParagraph>
        <AnimatedParagraph index={1}>This is the content of Section 3 - Paragraph 2</AnimatedParagraph>
        <AnimatedParagraph index={2} onAnimationComplete={handleAnimationComplete3}>
          This is the content of Section 3 - Paragraph 3
        </AnimatedParagraph>
      </Section>

      {/* Section 4 */}
      <Section id="section4" title="Section 4" isVisible={isSection4Visible}>
        <AnimatedParagraph index={0}>This is the content of Section 4 - Paragraph 1</AnimatedParagraph>
        <AnimatedParagraph index={1}>This is the content of Section 4 - Paragraph 2</AnimatedParagraph>
        <AnimatedParagraph index={2} onAnimationComplete={handleAnimationComplete4}>
          This is the content of Section 4 - Paragraph 3
        </AnimatedParagraph>
      </Section>

      {/* Section 5 */}
      <Section id="section5" title="Section 5" isVisible={isSection5Visible}>
        <AnimatedParagraph index={0}>This is the content of Section 5 - Paragraph 1</AnimatedParagraph>
        <AnimatedParagraph index={1}>This is the content of Section 5 - Paragraph 2</AnimatedParagraph>
        <AnimatedParagraph index={2}>
          This is the content of Section 5 - Paragraph 3
        </AnimatedParagraph>
      </Section>
    </div>
  );
};

export default App;
