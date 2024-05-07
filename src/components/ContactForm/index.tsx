export default function Contact() {
  return (
    <section
      id="contact"
      class="flex flex-col items-center justify-center w-full gap-8 my-10 lg:items-start lg:flex-row"
    >
      <div class="w-full max-w-lg lg:w-1/2">
        <h5 class="my-2 text-3xl font-bold text-green-700">Contact</h5>
        <p class="max-w-md mb-4 text-yellow-600"> Your text here</p>
        <div class="flex flex-row gap-2 socials">
          <a
            href="/"
            target="_blank"
            class="w-12 cursor-pointer text-slate-200 hover:text-green-700"
          ></a>
          <a
            href="/"
            target="_blank"
            class="w-12 cursor-pointer text-slate-200 hover:text-green-700"
          ></a>
        </div>
      </div>
      <div class="w-full max-w-md lg:flex-1">
        <form class="flex flex-col">
          <div class="mb-6">
            <label id="name" class="block mb-2 text-sm font-medium text-black">
              Full Name:
            </label>
            <input
              name="name"
              type="text"
              id="name"
              required
              class="bg-zinc-900 border border-zinc-700 placeholder-zinc-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Jane Doe"
            />
          </div>
          <div class="mb-6">
            <label id="email" class="block mb-2 text-sm font-medium text-white">
              Email Address:
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              class="bg-zinc-900 border border-zinc-700 placeholder-zinc-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="you@example.com"
            />
          </div>
          <div class="mb-6">
            <label
              id="subject"
              class="block mb-2 text-sm font-medium text-white"
            >
              Subject:
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              class="bg-zinc-900 border border-zinc-700 placeholder-zinc-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hello"
            />
          </div>
          <div class="mb-6">
            <label
              id="message"
              class="block mb-2 text-sm font-medium text-white"
            >
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              class="bg-zinc-900 border border-zinc-700 placeholder-zinc-400 text-gray-100 text-sm rounded-lg block w-full p-2.5 min-h-28"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            class="bg-primary-500 hover:bg-primary-600 text-black font-medium py-2.5 px-5 rounded-lg w-full border border-green-700 bg-neutral-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
