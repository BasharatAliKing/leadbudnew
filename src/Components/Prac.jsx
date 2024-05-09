import React, { useState } from 'react';

function Prac() {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleAnswer = (index) => { 
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  const faqs = [
    { id: 1, question: 'Question 1', answer: 'Answer 1' },
    { id: 2, question: 'Question 2', answer: 'Answer 2' },
    { id: 3, question: 'Question 3', answer: 'Answer 3' },
  ];

  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={faq.id}>
          <div onClick={() => toggleAnswer(index)}>{faq.question}</div>
          {visibleIndex === index && <div>{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default Prac;