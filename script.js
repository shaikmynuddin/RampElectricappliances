// ✅ Declare toggleMenu in global scope first
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger').querySelector('i');

  nav.classList.toggle('hidden');
  nav.classList.toggle('flex');
  nav.classList.toggle('flex-col');
  nav.classList.toggle('absolute');
  nav.classList.toggle('top-16');
  nav.classList.toggle('left-0');
  nav.classList.toggle('w-full');
  nav.classList.toggle('px-6');
  nav.classList.toggle('pb-4');
  nav.classList.toggle('gap-4');
  nav.classList.toggle('z-40');

  // ❌ Remove this to keep navbar transparent
  // nav.classList.toggle('bg-ramp-dark');

  // Toggle icon
  hamburger.classList.toggle('fa-ellipsis-v');
  hamburger.classList.toggle('fa-times');
}
// Auto-reset mobile nav on resize
window.addEventListener("resize", () => {
  const nav = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger').querySelector('i');

  if (window.innerWidth >= 768) {
    nav.classList.add('hidden');
    nav.classList.remove(
      'flex', 'flex-col', 'absolute', 'top-16', 'left-0',
      'w-full', 'px-6', 'pb-4', 'gap-4', 'z-40'
    );

    // Reset hamburger icon if it was toggled
    hamburger.classList.add('fa-ellipsis-v');
    hamburger.classList.remove('fa-times');
  }
});


// ✅ This stays inside the scroll listener
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const links = navbar.querySelectorAll(".nav-link");
  const signin = navbar.querySelector(".signin-btn");
  const demo = navbar.querySelector(".demo-btn");

  const triggerPoint = 100;

  if (window.scrollY > triggerPoint) {
    navbar.classList.remove("text-white");
    navbar.classList.add("text-black");

    links.forEach((link) => {
      link.classList.remove("hover:bg-white", "hover:text-black");
      link.classList.add("hover:bg-black", "hover:text-white");
    });

    signin.classList.remove("text-white/80", "hover:text-white", "border-white/30");
    signin.classList.add("text-black/80", "hover:text-black", "border-black/30");

    demo.classList.remove("bg-ramp-lime", "hover:bg-lime-300", "text-black");
    demo.classList.add("bg-black", "hover:bg-gray-800", "text-white");
  } else {
    navbar.classList.remove("text-black");
    navbar.classList.add("text-white");

    links.forEach((link) => {
      link.classList.remove("hover:bg-black", "hover:text-white");
      link.classList.add("hover:bg-white", "hover:text-black");
    });

    signin.classList.remove("text-black/80", "hover:text-black", "border-black/30");
    signin.classList.add("text-white/80", "hover:text-white", "border-white/30");

    demo.classList.remove("bg-black", "hover:bg-gray-800", "text-white");
    demo.classList.add("bg-ramp-lime", "hover:bg-lime-300", "text-black");
  }
});
