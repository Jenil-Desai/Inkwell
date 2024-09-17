import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[#faf9f7] min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-4">Human stories & ideas</h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8">A place to read, write, and deepen your understanding</p>
          <Link to="/blogs">
            <button className="bg-gray-900 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">Start reading</button>
          </Link>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png" alt="Abstract illustration" width={400} height={400} className="max-w-full h-auto" />
        </div>
      </div>
      <footer className="mt-16 text-center text-sm text-gray-500 border-t border-black">
        <div className="flex justify-center space-x-4">
          <Link to="/blogs" className="hover:text-gray-700">
            Blog
          </Link>
          <Link to="/signup" className="hover:text-gray-700">
            Create Account
          </Link>
          <Link to="/publish" className="hover:text-gray-700">
            Write A Blog
          </Link>
        </div>
      </footer>
    </div>
  );
}
