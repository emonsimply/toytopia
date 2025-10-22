import axios from "axios";
import { useEffect, useState } from "react";

const useToys = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/toys.json')
    .then(data => setToys(data.data))
    .catch(err => setError(err.message))
    .finally(() => setLoading(false));
  }, []);

  return { toys, loading, error };
};

export default useToys;