import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { setDataAction } from "../redux/actions";

export default function ProtectedPage() {
  const [titles, setTitles] = useState([]);
  const dispatch = useDispatch();
  const URL = "https://jsonplaceholder.typicode.com/photos?_limit=5";
  const fetchData = async () => {
    const result = await axios.get(URL);
    setTitles(
      result.data.map(({ id, title }) => ({ id, title: title.slice(0, 10) }))
    );
    dispatch(
      setDataAction(
        result.data.map(({ id, title }) => ({ id, title: title.slice(0, 10) }))
      )
    );
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h2>Protected page</h2>
      <Link to="/detailed">Detailed page</Link>
      <ul>
        {titles.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
}
