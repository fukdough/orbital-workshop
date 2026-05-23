'use client'

export default function ErrorPage({
    error,
    reset
}: {
    error: Error,
    reset: () => void
}) {
    return (
        <main className= "p-8">
            <h1 className="text-2xl font-bold text-black-600">
                Something went wrong!
            </h1>

            <p className= "mt-2 text-gray-600">
                We could not load your expenses
            </p>

            <button
                onClick={reset}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Try Again
            </button>
        </main>
    )
}