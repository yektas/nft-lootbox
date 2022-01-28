export type Question = {
  questionText: string;
  image?: string;
  answers: string[];
  correctAnswerIndex?: number;
};

const quizQuestions: Question[] = [
  {
    questionText: "How many teeth normal adult dogs have?",
    image:
      "https://images.unsplash.com/photo-1562400878-83323040c8df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
    answers: ["24", "16", "42", "32"],
    correctAnswerIndex: 2,
  },
  {
    questionText: "Through what part of the body do dogs sweat?",
    image:
      "https://images.unsplash.com/photo-1517423738875-5ce310acd3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=470&q=80",
    answers: ["Armpits", "Ears", "Backside", "Paws"],
    correctAnswerIndex: 3,
  },
  {
    questionText: "What is the most common training command taught to dogs?",
    image:
      "https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
    answers: ["Stay", "Beg", "Sit", "Dance"],
    correctAnswerIndex: 2,
  },
  {
    questionText: "What is a dog’s most highly developed sense?",
    image:
      "https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    answers: ["Taste", "Smell", "Sight", "Touch"],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "What is the favorite dog breed of the Queen of England, Elizabeth II?",
    image:
      "https://images.unsplash.com/photo-1601880348117-25c1127a95df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    answers: ["Corgi", "Basenji", "Rottweiler", "Pomeranian"],
    correctAnswerIndex: 0,
  },
];

export default quizQuestions;
