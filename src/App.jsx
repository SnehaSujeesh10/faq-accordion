
import { useState } from 'react'
import './App.css'

function App() {
  const [activeIndexes, setActiveIndexes] = useState([])

  const faqs = [
    {
      question: 'What is an FAQ accordion?',
      answer:
        'An FAQ accordion is a user interface component that displays questions and allows users to expand them to read their answers.'
    },
    {
      question: 'How does this accordion work?',
      answer:
        'Click on a question to reveal its answer. Click the same question again to close it.'
    },
    {
      question: 'Can I open multiple questions at once?',
      answer:
        'Yes! You can now open multiple questions at once using the individual questions or the Expand All button.'
    },
    {
      question: 'Which technologies are used?',
      answer:
        'This project is built using React, JSX, JavaScript, HTML and CSS.'
    },
    {
      question: 'What is the use of useState?',
      answer:
        'useState is a React Hook that allows a component to store and update information.'
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndexes((previousIndexes) =>
      previousIndexes.includes(index)
        ? previousIndexes.filter((item) => item !== index)
        : [...previousIndexes, index]
    )
  }

  const toggleAll = () => {
    setActiveIndexes((previousIndexes) =>
      previousIndexes.length === faqs.length
        ? []
        : faqs.map((_, index) => index)
    )
  }

  const allExpanded = activeIndexes.length === faqs.length

  return (
    <div className="app">
      <header className="header">
        <p className="tagline">GOT QUESTIONS?</p>
        <h1>Frequently Asked Questions</h1>
        <p className="subtitle">
          Everything you need to know, all in one place.
        </p>
      </header>

      <main className="faq-container">
        <div className="faq-controls">
          <span>{activeIndexes.length} of {faqs.length} questions open</span>
          <button className="toggle-all" onClick={toggleAll}>
            {allExpanded ? 'Collapse All −' : 'Expand All +'}
          </button>
        </div>

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
      </main>

      <footer>
        <p>Made with React 💜</p>
      </footer>
    </div>
  )
}

export default App
