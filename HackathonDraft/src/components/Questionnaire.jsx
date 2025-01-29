import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
  { id: 1, question: "What is your favorite color?", options: ["Red", "Blue", "Green", "Skip"] },
  { id: 2, question: "What is your favorite animal?", options: ["Cat", "Dog", "Fish", "Skip"] },
  { id: 3, question: "What is your favorite food?", options: ["Pizza", "Burger", "Pasta", "Skip"] },
  { id: 4, question: "Do you like coding?", options: ["Yes", "No", "Maybe", "Skip"] },
  { id: 5, question: "Do you prefer coffee or tea?", options: ["Coffee", "Tea", "Neither", "Skip"] },
  { id: 6, question: "What is your favorite season?", options: ["Spring", "Summer", "Fall", "Winter", "Skip"] },
  { id: 7, question: "What city do you live in?", options: ["New York", "Los Angeles", "Chicago", "Skip"] },
  { id: 8, question: "What is your favorite movie genre?", options: ["Action", "Comedy", "Drama", "Skip"] },
  { id: 9, question: "Do you play video games?", options: ["Yes", "No", "Sometimes", "Skip"] },
  { id: 10, question: "Do you prefer indoor or outdoor activities?", options: ["Indoor", "Outdoor", "Both", "Skip"] }
];

const Questionnaire = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState([]);
  const navigate = useNavigate();  // React Router's hook for navigation

  const handleAnswer = (answer) => {
    setResponses([...responses, { questionId: questions[currentQuestionIndex].id, answer }]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/chat');  // Navigate to the chat route after the last question
    }
  };

  const handleSkip = () => {
    setResponses([...responses, { questionId: questions[currentQuestionIndex].id, answer: 'Skipped' }]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/chat');  // Navigate to the chat route after the last question
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8 px-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full sm:w-96">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Question {currentQuestionIndex + 1}: {questions[currentQuestionIndex].question}
        </h2>
        <div className="space-y-3">
          {questions[currentQuestionIndex].options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => (option !== "Skip" ? handleAnswer(option) : handleSkip())}
              className="w-full px-4 py-2 text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
              {option}
            </button>
          ))}
        </div>
        <div className="mt-6">
          {currentQuestionIndex === questions.length - 1 && (
            <h3 className="text-gray-600 text-center">Your responses: {JSON.stringify(responses)}</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
