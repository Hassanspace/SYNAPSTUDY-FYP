const ShelfList = ({ shelves }) => {
  if (!shelves.length)
    return <p className="text-center">No shelves yet.</p>;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {shelves.map((s) => (
        <div key={s.id} className="bg-white shadow p-6 rounded-2xl">
          <h3 className="font-bold text-xl">{s.title}</h3>
          <p>{s.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ShelfList;
