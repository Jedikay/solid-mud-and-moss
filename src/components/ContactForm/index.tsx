export default function Contact() {
  return (
    <section
      id="contact"
      class="flex flex-col items-center justify-center w-full gap-8 my-10 lg:items-start lg:flex-row"
    >
      <div class="w-full max-w-lg lg:w-1/2">
        <h5 class="my-2 text-3xl font-bold text-green-700">
          Want to create a custom piece for your home?
        </h5>
        <p class="text-2xl max-w-md mb-4 text-zinc-800">
          {" "}
          Reach out to us today!
        </p>
        <img
          src="/public/images/earl-wilcox-7ZK_CuHroq4-unsplash.jpg"
          class="rounded-lg"
        />
        <div class="flex flex-row gap-2 socials">
          <a
            href="/"
            target="_blank"
            class="w-12 cursor-pointer text-slate-200 hover:text-green-700"
          ></a>
          <a
            href="/"
            target="_blank"
            class="w-12 cursor-pointer text-yellow-700 hover:text-green-700"
          ></a>
        </div>
      </div>
      <div class="w-full max-w-md lg:flex-1">
        <form class="flex flex-col">
          <div class="mb-6">
            <label
              id="name"
              class="block mb-2 text-sm font-medium text-green-700"
            >
              Full Name:
            </label>
            <input
              name="name"
              type="text"
              id="name"
              required
              class="border border-green-700 placeholder-zinc-500 text-zinc-800 text-sm rounded-lg block w-full p-2.5"
              placeholder="Jane Doe"
            />
          </div>
          <div class="mb-6">
            <label
              id="email"
              class="block mb-2 text-sm font-medium text-green-700"
            >
              Email Address:
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              class="border border-green-700 placeholder-zinc-500 text-zinc-800 text-sm rounded-lg block w-full p-2.5"
              placeholder="you@example.com"
            />
          </div>
          <div class="mb-6">
            <label
              id="subject"
              class="block mb-2 text-sm font-medium text-green-700"
            >
              Subject:
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              class="border border-green-700 placeholder-zinc-500 text-zinc-800 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hello"
            />
          </div>
          <div class="mb-6">
            <label
              id="message"
              class="block mb-2 text-sm font-medium text-green-700"
            >
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              class=" border border-green-700 placeholder-zinc-500 text-zinc-800 text-sm rounded-lg block w-full p-2.5 min-h-28"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            class="bg-green-700 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full border border-black"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
