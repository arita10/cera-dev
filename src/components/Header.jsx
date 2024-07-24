import logo from '../assets/images/logocera.png'
import './Header.css';
export default function Header() {
    return (
      <header className="flex flex-col items-center"> {/* Main container */}
      <img 
        src={logo} 
        alt="My Website Logo" 
      />

      <nav>
        <ul className="flex space-x-4">
        <li><a href="#" class="text-gray-700 hover:text-blue-500">Collections</a></li>
        <li><a href="#" class="text-gray-700 hover:text-blue-500">Product Categories</a></li>
        <li><a href="#" class="text-gray-700 hover:text-blue-500">About Us</a></li>
        </ul>
      </nav>
      <div className="w-1/2 mx-auto mt-4 border-t border-gray-200"></div> {/* Added line */}
    </header>
    );
  }