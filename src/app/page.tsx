export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center px-6 py-20 sm:px-10">
        <p className="text-sm font-medium tracking-wide text-zinc-400">Qordi</p>
        <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Think sharper. Live awake.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
          Capture voice and ideas in one place, then get clear next actions you can ship.
        </p>

        <form className="mt-10 flex w-full max-w-xl flex-col gap-3 sm:flex-row" action="#" method="post">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="h-12 flex-1 rounded-md border border-zinc-700 bg-zinc-900 px-4 text-zinc-100 placeholder:text-zinc-500 focus:border-zinc-500 focus:outline-none"
          />
          <button
            type="submit"
            className="h-12 rounded-md bg-zinc-100 px-5 font-medium text-zinc-900 transition-colors hover:bg-white"
          >
            Join waitlist
          </button>
        </form>
      </main>
    </div>
  );
}
