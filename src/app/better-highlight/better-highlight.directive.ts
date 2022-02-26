import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
	selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

	constructor(private elRef: ElementRef, private renderer: Renderer2) {
	}

	ngOnInit(): void {
	}

	@HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
	@HostBinding('style.color') color: string = 'black';

	@HostListener('mouseenter') onMouseOver(eventData: Event){
		// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
		// this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
		this.backgroundColor = 'blue';
		this.color = 'white';
	}

	@HostListener('mouseleave') onMouseLeave(eventData: Event){
		// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
		// this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
		this.backgroundColor = 'transparent';
		this.color = 'black';
	}


}
