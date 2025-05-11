const Title = ({ children, extraClassName }) => (
  <h1
    className={`font-bold bg-gradient-to-r from-emerald-400 via-cyan-500 to-violet-600 text-transparent bg-clip-text whitespace-nowrap ${extraClassName}`}
  >
    {children}
  </h1>
);

export default Title;
