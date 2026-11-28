import { useState } from 'react'
import './App.css'

function App() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'What is an FAQ accordion?',
      answer: 'An FAQ accordion displays questions and allows users to expand them to read their answers.'
    },
    {
      question: 'How does this accordion work?',
      answer: 'Click on a question to reveal its answer. Click the same question again to close it.'
    },
    {
      question: 'Can I open multiple questions at once?',
      answer: 'No. Only one question can remain open at a time.'
    },
    {
      question: 'Which technologies are used?',
      answer: 'This project is built using React, JSX, JavaScript, HTML and CSS.'
    },
    {
      question: 'What is the use of useState?',
      answer: 'useState is a React Hook that allows a component to store and update information.'
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex((previousIndex) =>
      previousIndex === index ? null : index
    )
  }

  return (
    <div className="app">
      <header className="header">
        <p className="tagline">GOT QUESTIONS?</p>
        <h1>Frequently Asked Questions</h1>
        <p className="subtitle">Everything you need to know, all in one place.</p>
      </header>

      <main className="faq-container">
        <div className="faq-controls">
          <span>
            {activeIndex === null
              ? '0 questions open'
              : `1 of ${faqs.length} questions open`}
          </span>
        </div>

        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span>{faq.question}</span>
              <span className="icon">
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>

            <div
              id={`faq-answer-${index}`}
              className={`faq-answer-wrapper ${
                activeIndex === index ? 'open' : ''
              }`}
            >
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </main>

      <footer>
        <p>Made with React 💜</p>
      </footer>
    </div>
  )
}

export default App
