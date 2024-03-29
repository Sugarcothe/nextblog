import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <div>Not Found</div>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">Return </Link>
    </div>
  );
};

export default NotFound;
