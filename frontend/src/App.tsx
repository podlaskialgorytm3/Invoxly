import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch do endpointu API.
    // W środowisku produkcyjnym Docker, Nginx przekieruje to zapytanie.
    fetch('/api/hello')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error('Błąd podczas pobierania danych:', error);
        setError('Nie udało się połączyć z backendem. Sprawdź konfigurację proxy w Nginx.');
      });
  }, []);

  return (
    <div className="App">
      <h1>Projekt Full Stack</h1>
      <div className="card">
        <p>{message || 'Łączenie z backendem...'}</p>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
}

export default App;
