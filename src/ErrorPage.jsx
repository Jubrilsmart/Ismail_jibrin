import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col items-center pt-20">
      <div className="p-6 size-100 space-y-10 text-center">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link className="bg-blue-500 py-1 px-2 rounded-md text-xl" to={'/'}>Return Home</Link>
      </div>
      
    </div>
  );
}
