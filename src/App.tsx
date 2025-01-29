import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load initial posts and setup scroll listener
  useEffect(() => {
    setTimeout(() => {
      setPosts(Array.from({ length: 5 }, (_, i) => i + 1));
      setIsLoading(false);
    }, 2000);

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        setPosts((prev) => [
          ...prev,
          ...Array.from({ length: 3 }, (_, i) => prev.length + i + 1),
        ]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Skeleton Loaders
  const PostSkeleton = () => (
    <div className="mb-6 bg-gray-800 rounded-xl p-6 animate-pulse">
      <div className="h-80 bg-gray-700 rounded w-full mb-4" />
      <div className="h-6 bg-gray-700 rounded w-1/2 mb-4" />
      <div className="h-4 bg-gray-700 rounded w-full mb-2" />
      <div className="h-4 bg-gray-700 rounded w-3/4" />
    </div>
  );

  const SidebarSkeleton = () => (
    <div className="bg-gray-800 rounded-xl p-4 mb-4 animate-pulse">
      <div className="h-52 bg-gray-700 rounded w-full mb-4" />
      <div className="h-5 bg-gray-700 rounded w-2/3 mb-3" />
      <div className="h-3 bg-gray-700 rounded w-full" />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Fixed Header */}
      <header className="fixed top-0 w-full bg-gray-900 z-50 p-4 border-b border-gray-800">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-12 pr-4 py-2 bg-gray-800 rounded-full text-sm focus:outline-none  w-64 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <button className="px-6 py-2 rounded-full text-sm font-medium bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Donate
          </button>
        </div>
      </header>

      <main className="pt-16 flex">
        {/* Left Navigation */}
        <div className="w-64 p-6 border-r border-gray-800 fixed h-full">
          <h2 className="text-xl font-bold mb-6">Navigation</h2>
          <div className="space-y-4">
            <button className="w-full text-left p-3 hover:bg-gray-800 rounded-lg">
              Home
            </button>
            <button className="w-full text-left p-3 hover:bg-gray-800 rounded-lg">
              Popular
            </button>
            <button className="w-full text-left p-3 hover:bg-gray-800 rounded-lg">
              Following
            </button>
            <button className="w-full text-left p-3 hover:bg-gray-800 rounded-lg">
              <a
                href="https://scintillating-cannoli-2bf561.netlify.app/"
                target="_blank"
                className="w-full h-full inline-block"
              >
                Upload
              </a>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-64 mr-80 flex-1 p-6 min-h-screen">
          <div className="max-w-2xl mx-auto">
            {isLoading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <PostSkeleton key={i} />
                ))
              : posts.map((post) => (
                  <div key={post} className="mb-6 bg-gray-800 rounded-xl p-6">
                    <div className="h-80 rounded-lg bg-gray-700 overflow-hidden mb-3">
                      {/* add image */}
                      {/* <img
                        src={'/assets/name-image'}
                        alt="first image"
                        className="object-cover object-center"
                      /> */}
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Post {post}</h2>
                    <p className="text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 p-6 border-l border-gray-800 fixed right-0 h-full overflow-y-auto no-scrollbar">
          <h2 className="text-xl font-bold mb-6">Recommended</h2>

          {/* Sponsored Content */}
          {isLoading ? (
            <SidebarSkeleton />
          ) : (
            <div className="bg-gray-800 rounded-xl p-4 mb-6">
              <div className="h-52 rounded-lg bg-purple-900/30 overflow-hidden mb-3">
                {/* add image */}
                {/* <img
                        src={'/assets/name-image'}
                        alt="first image"
                        className="object-cover object-center"
                      /> */}
              </div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold">Sponsored Content</h3>
                <span className="text-xs text-purple-400">Ad</span>
              </div>
              <p className="text-gray-400 text-sm">
                Discover amazing products that enhance your experience
              </p>
            </div>
          )}

          {/* Recommended Content */}
          <div className="flex flex-col gap-4">
            {isLoading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <SidebarSkeleton key={i} />
                ))
              : [
                  'Trending discussions',
                  'New community highlights',
                  'Popular stories',
                ].map((text, i) => (
                  <div
                    key={i}
                    className="bg-gray-800 rounded-xl p-4 last:mb-14"
                  >
                    <div className="h-52 rounded-lg bg-gray-700 overflow-hidden mb-3">
                      {/* add image */}
                      {/* <img
                        src={'/assets/name-image'}
                        alt="first image"
                        className="object-cover object-center"
                      /> */}
                    </div>
                    <h3 className="font-bold mb-2">Recommended Post {i + 1}</h3>
                    <p className="text-gray-400 text-sm">
                      {text} in your network
                    </p>
                  </div>
                ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
