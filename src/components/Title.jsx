const Title = ({ children, extraClassName }) => (
  <h1
    className={`font-bold ${extraClassName}`}
  >
    {children}
  </h1>
);

export default Title;