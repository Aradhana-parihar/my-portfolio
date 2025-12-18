/* Sections hidden initially for scroll animation */
section {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s ease-out;
}

section.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Optional sticky navbar effect */
nav.scrolled {
    background: rgba(255,255,255,0.95);
    box-shadow: 0 8px 25px rgba(177, 16, 16, 0.15);
    transition: all 0.3s ease;
}
