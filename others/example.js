class PageHeader extends HTMLElement {
  #header;

  connectedCallback() {
    this.#header = document.createElement('h1');
  }
}
