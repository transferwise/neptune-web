export function addClassAndTriggerReflow(node, className) {
  if (node) {
    // eslint-disable-next-line no-unused-expressions
    node.scrollTop; // this causes a reflow
    node.classList.add(className);
  }
}

export function removeClass(node, className) {
  if (node) {
    node.classList.remove(className);
  }
}
