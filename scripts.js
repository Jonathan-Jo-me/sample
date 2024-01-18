function hoverProject(project) {
    gsap.to(project, { scale: 1.05, duration: 0.3 });
}

function unhoverProject(project) {
    gsap.to(project, { scale: 1, duration: 0.3 });
}
