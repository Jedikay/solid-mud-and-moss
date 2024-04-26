export default function Footer() {
  return (
    <footer class=" flex flex-col items-center justify-center text-yellow-600 bg-green-950  w-full h-30 px-4 py-6 gap-3">
      <div class="flex items-center justify-center cursor-pointer">
        <img src="/public/images/Mud&Moss.jpg" class="w-36 rounded-full" />
      </div>
      <p class=" flex items-center justify-center text-xs text-yellow-600">
        <a
          class="font-bold hover:underline hover:text-yellow-600"
          href="https://greatidea.dev/"
          target="_blank"
        >
          <ul class="flex flex-row items-center gap-4 justify-center px-8">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </a>
      </p>
      <p class="flex items-center justify-center text-xs text-yellow-600">
        &copy; 2024 Great Idea Development | All rights reserved.
      </p>
    </footer>
  );
}
