import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <section>
      <div>
        <h1>Ops!</h1>
        <p>Sorry, an unxpected error has occured.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </section>
  );
}

export default ErrorPage;