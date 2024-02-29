// Select all anchor links on the page
const links = document.querySelectorAll("a[href^='#']");

// Add an event listener to each link
links.forEach(link => {
  link.addEventListener("click", event => {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the target element's ID from the link's href attribute
    const targetId = link.getAttribute("href").slice(1);

    // Select the target element
    const target = document.getElementById(targetId);

    // Scroll to the target element smoothly
    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});