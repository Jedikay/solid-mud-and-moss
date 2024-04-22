export default function Navigation() {
  return (
    <div
      class="bg-green-950 text-yellow-600 flex flex-row items-center justify-between w-full h-24 px-8"
      id="nav"
    >
      <div id="logo" class="flex items-center justify-center h-full w-20">
        <img
          class="w-full rounded-full cursor-pointer"
          src="/public/images/Mud&Moss.jpg"
        />
      </div>

      <nav class="flex items-center justify-center" id="links">
        <ul class="flex flex-row items-center justify-between h-full gap-4">
          <li class="cursor-pointer hover:underline">Home</li>
          <li class="cursor-pointer hover:underline">About</li>
          <li class="cursor-pointer hover:underline">Services</li>
          <li class="cursor-pointer hover:underline">Contact</li>
        </ul>
      </nav>
    </div>
  );
}
