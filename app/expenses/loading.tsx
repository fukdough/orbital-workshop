export default function Loading() {
    return (
        <main className="p-8 max-w-xl mx-auto">
              <h1 className="text-2xl font-bold mb-6">Loading Expenses...</h1>
              
              <div className= "space-y-4">
                <div className="h-24 rounded-lg bg-gray-200 animate-pulse" />
                <div className="h-24 rounded-lg bg-gray-200 animate-pulse" />
                <div className="h-24 rounded-lg bg-gray-200 animate-pulse" />
              </div>
            </main>
    );
}