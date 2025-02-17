import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 bg-white shadow-md font-mono">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
          Minthet
        </Link>
        
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 