const AboutLayout = ({ children }) => {
  return (
    <div>
      <nav className="m-6 text-blue-500 text-2xl font-bold">
        Mission | Vision
      </nav>
      {children}
    </div>
  );
};

export default AboutLayout;
