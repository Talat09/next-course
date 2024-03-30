import Link from "next/link";

const AboutLayout = ({ children }) => {
  return (
    <div>
      <nav className="mt-5 text-xl  mb-3 bg-black p-3 text-white rounded-md w-48">
        <ul className=" flex gap-6 ">
          <li>
            <Link href="/about/mission">Mission</Link>
          </li>

          <li>
            <Link href="/about/vision">Vision</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default AboutLayout;
