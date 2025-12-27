
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-5xl font-bold text-zinc-900 dark:text-white sm:text-6xl">
          Anonymous Messenger App
        </h1>
        <p className="mt-6 text-lg text-zinc-700 dark:text-zinc-300 sm:text-xl">
          A simple and secure way to send anonymous messages.
        </p>
        <div className="mt-10 flex space-x-4">
          <a
            href="#"
            className="rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Create Message
          </a>
          <a
            href="#"
            className="rounded-md bg-gray-200 px-6 py-3 text-zinc-900 hover:bg-gray-300"
          >
            View Inbox
          </a>
        </div>
      </main>
    </div>
  );
}
