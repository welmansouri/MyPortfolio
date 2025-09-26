import { Directive, ElementRef,Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true
})
export class RevealOnScrollDirective implements OnInit {
  @Input('appRevealOnScroll') animation: string = 'fade-in-bottom';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, this.animation);
            observer.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(this.el.nativeElement);
  }
}
