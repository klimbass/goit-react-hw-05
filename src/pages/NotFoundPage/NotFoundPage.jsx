import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h2>404</h2>
      <p>Sorry, page not found...</p>
      <Link to="/">Go to home page</Link>
    </div>
  );
}
