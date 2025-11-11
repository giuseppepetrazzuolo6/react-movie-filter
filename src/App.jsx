import { useState } from "react";

function App() {
  const movies = [
    { id: 1, title: "Inception", genre: "Fantascienza" },
    { id: 2, title: "Il Padrino", genre: "Thriller" },
    { id: 3, title: "Titanic", genre: "Romantico" },
    { id: 4, title: "Batman", genre: "Azione" },
    { id: 5, title: "Interstellar", genre: "Fantascienza" },
    { id: 6, title: "Pulp Fiction", genre: "Thriller" },
  ];
  const [movie, setMovie] = useState(movies)

  return (
    <>
      <div className="container">
        <h1 className="text-white text-center my-3">🎬 Lista Film</h1>
        <div className="card p-3">
          <select className="form-select mb-3" aria-label="Default select example">
            <option value="">Tutti i generi</option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Thriller">Thriller</option>
            <option value="Romantico">Romantico</option>
            <option value="Azione">Azione</option>
          </select>
          <ul className="list-group">
            {
              movie.map(item =>
                <li className="list-group-item bg-light rounded-0" key={item.id}>
                  {item.title} – <em className="text-secondary">{item.genre}</em>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
