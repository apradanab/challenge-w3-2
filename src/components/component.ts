type InsertPosition = "beforebegin" | "afterbegin" | "beforeend" | "afterend";

export class Component {
  selector: string;
  template: string = '';
  element!: HTMLElement;
  constructor(selector:string) {
    this.selector = selector;
  }

  render(position: InsertPosition = 'beforeend') {
    const targetElement = document.querySelector<HTMLElement>(this.selector);
    if(!targetElement) return;
    targetElement.insertAdjacentHTML(position, this.template);
    this.element = targetElement.lastElementChild! as HTMLElement;
  }
}
