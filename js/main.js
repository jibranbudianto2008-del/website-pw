(function (){
    "use strict";
    const $ = (s, c = document) => c.querySelector(s);
    const reduceMotion = window.matchMedia("(prefers-reduce-motion: reduce)").matches;
    const rupiah = n => "Rp " + new Intl.NumberFormat("id-ID").format(n);
    const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

    /* Navbar */
    const navbar = $("#navbar"), toggle = $("#navToggle"), menu = $("#navMenu");
    const onScroll = () => navbar.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true});
    const setMenu = open => {
        menu.classList.toggle("is-open", open);
        toggle.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", open);
        toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
    }
})