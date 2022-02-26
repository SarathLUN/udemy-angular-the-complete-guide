import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
	selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

	constructor(private elRef: ElementRef, private renderer: Renderer2) {
	}

	ngOnInit(): void {
	}

	@HostListener('mouseenter') onMouseOver(eventData: Event){
		this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
		this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white')
	}

	@HostListener('mouseleave') onMouseLeave(eventData: Event){
		this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
		this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black')
	}


}
