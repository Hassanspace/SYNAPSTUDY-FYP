const QuizList = ({ quizzes }) => {
  if (!quizzes.length)
    return <p className="text-center text-gray-700">No quizzes yet.</p>;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {quizzes.map((q) => (
        <div key={q.id} className="bg-white shadow p-6 rounded-2xl">
          <h3 className="text-xl font-bold">{q.title}</h3>
          <p className="text-gray-700">{q.description}</p>
        </div>
      ))}
    </div>
  );
};

export default QuizList;
