const HeaderField = ({ children, extraClassName }) => {
  return (
    <div
      className={`bg-white h-16 shadow-md flex items-center ${extraClassName}`}
    >
      {children}
    </div>
  );
};

export default HeaderField;
