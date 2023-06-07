/**
 *
 * @param {HTMLElement} el
 * @param {(nodes: NodeList) => void} f
 */
export function onAppend(el, f) {
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach((mut) => {
            if (mut.addedNodes.length > 0) {
                f(mut.addedNodes);
            }
        });
    });
    observer.observe(el, { childList: true });
}
