window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const links = navbar.querySelectorAll(".nav-link");
  const signin = navbar.querySelector(".signin-btn");
  const demo = navbar.querySelector(".demo-btn");

  // Change point where nav style updates (in pixels)
  const triggerPoint = 100;

  if (window.scrollY > triggerPoint) {
    // Light background mode
    navbar.classList.remove("text-white");
    navbar.classList.add("text-black");

    links.forEach((link) => {
      link.classList.remove("hover:bg-white", "hover:text-black");
      link.classList.add("hover:bg-black", "hover:text-white");
    });

    signin.classList.remove(
      "text-white/80",
      "hover:text-white",
      "border-white/30"
    );
    signin.classList.add(
      "text-black/80",
      "hover:text-black",
      "border-black/30"
    );

    demo.classList.remove("bg-ramp-lime", "hover:bg-lime-300", "text-black");
    demo.classList.add("bg-black", "hover:bg-gray-800", "text-white");
  } else {
    // Dark background mode
    navbar.classList.remove("text-black");
    navbar.classList.add("text-white");

    links.forEach((link) => {
      link.classList.remove("hover:bg-black", "hover:text-white");
      link.classList.add("hover:bg-white", "hover:text-black");
    });

    signin.classList.remove(
      "text-black/80",
      "hover:text-black",
      "border-black/30"
    );
    signin.classList.add(
      "text-white/80",
      "hover:text-white",
      "border-white/30"
    );

    demo.classList.remove("bg-black", "hover:bg-gray-800", "text-white");
    demo.classList.add("bg-ramp-lime", "hover:bg-lime-300", "text-black");
  }
});
