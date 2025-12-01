const StudentList = ({ students }) => {
  if (!students.length)
    return <p className="text-center">No students yet.</p>;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {students.map((s) => (
        <div key={s.id} className="bg-white shadow p-6 rounded-2xl">
          <h3 className="font-bold">{s.username}</h3>
          <p>{s.email}</p>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
