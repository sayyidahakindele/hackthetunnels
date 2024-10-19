import { Central as Layout } from "@/layouts";
import { Link } from "react-router-dom";
import "./NotFound.style.scss";

function NotFound() {
  return (
    <Layout title={""}>
      <h1 className="nf404">Oops!</h1>
      <h2 className="nf404">404 - PAGE NOT FOUND</h2>
      <p className="nf404">The page you're looking for might have been removed,</p>
      <p className="nf404">had its name changed or is temporarily unavailable</p>
      <button className="nf404">
        <Link to={"/"}>Return To Menu</Link>
      </button>
    </Layout>
  );
}

export default NotFound;
