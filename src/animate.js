import anime from "animejs";

export function fade(element) {
  anime({
    targets: element,
    duration: 1000,
    easing: "linear",
    opacity: 1
  });
}
