
function Accordion({ faqs, activeIndexes, toggleFAQ }) {
  return (
    <>
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <button
            className="faq-question"
            onClick={() => toggleFAQ(index)}
            aria-expanded={activeIndexes.includes(index)}
            aria-controls={`faq-answer-${index}`}
          >
            <span>{faq.question}</span>
            <span className="icon">
              {activeIndexes.includes(index) ? '−' : '+'}
            </span>
          </button>

          <div
            id={`faq-answer-${index}`}
            className={`faq-answer-wrapper ${
              activeIndexes.includes(index) ? 'open' : ''
            }`}
          >
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Accordion
