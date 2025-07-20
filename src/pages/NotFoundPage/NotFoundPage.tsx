import './NotFoundPage.scss';

export const NotFoundPage = () => {
  return (
    <div className="container">
      <h1>Page not found</h1>
      <img
        src={`${import.meta.env.BASE_URL}img/page-not-found.png`}
        alt="Page not found"
        className="pageNotFound"
      />
    </div>
  );
};
