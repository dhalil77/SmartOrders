// HomePage.jsx
import Auth from "../components/Auth";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="container mx-auto py-46">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-10">
            <h1 className="text-3xl font-bold text-center text-indigo-800 mb-8">
              SMART ORDERS
            </h1>
            
            <div className="mt-12">
              <Auth />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;