import { Link } from "react-router-dom";
import { ArrowLeft } from "react-feather";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-4">
      <div className="text-9xl font-bold mb-4 animate-bounce">404</div>
      <h1 className="text-4xl font-bold mb-2 animate-fade-in-down">Page Not Found</h1>
      <p className="text-xl mb-8 text-center max-w-md animate-fade-in">Oops! The page you're looking for seems to have wandered off. Let's get you back on track.</p>
      <div className="w-16 h-1 bg-black mb-8 animate-expand"></div>
      <Link to="/" className="inline-flex items-center px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors animate-fade-in-up">
        <ArrowLeft className="mr-2 h-4 w-4 animate-slide-right" />
        Back to Home
      </Link>
    </div>
  );
}
