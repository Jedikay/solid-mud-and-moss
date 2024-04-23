export default function Footer() {
  return (
    <footer class="flex items-center text-yellow-600 bg-green-950 h-34 w-screen">
      <div class="flex flex-col items-center justify-between gap-4 py-4"></div>
      <picture>
        <img src="/public/images/Mud&Moss.jpg" class="w-12 rounded-full" />
      </picture>
      <p class="text-xs text-yellow-600">
        <a
          class="font-bold hover:underline hover:text-yellow-600"
          href="https://greatidea.dev/"
          target="_blank"
        >
          GreatIdea.dev
        </a>
      </p>
      <p class="text-xs text-yellow-600">
        &copy; 2024 Great Idea Development | All rights reserved.
      </p>
    </footer>
  );
}
