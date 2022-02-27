import {Directive, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
	selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
	}

	@HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
	@HostBinding('style.color') color: string = 'black';

	@HostListener('mouseenter') onMouseOver(eventData: Event) {
		this.backgroundColor = 'blue';
		this.color = 'white';
	}

	@HostListener('mouseleave') onMouseLeave(eventData: Event) {
		this.backgroundColor = 'transparent';
		this.color = 'black';
	}


}
