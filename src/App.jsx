function App() {
  const movies = [
    { id: 1, title: "Inception", genre: "Fantascienza" },
    { id: 2, title: "Il Padrino", genre: "Thriller" },
    { id: 3, title: "Titanic", genre: "Romantico" },
    { id: 4, title: "Batman", genre: "Azione" },
    { id: 5, title: "Interstellar", genre: "Fantascienza" },
    { id: 6, title: "Pulp Fiction", genre: "Thriller" },
  ];

  return (
    <>
      <div className="container">
        <h1 className="text-white text-center my-3">🎬 Lista Film</h1>
        <ul class="list-group">
          {
            movies.map(item =>
              <li class="list-group-item bg-light rounded-0" key={item.id}>
                {item.title} – <em className="text-secondary">{item.genre}</em>
              </li>
            )
          }
        </ul>
      </div>
    </>
  )
}

export default App
