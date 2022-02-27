import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
	selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

	@Input() defaultBgColor: string = 'transparent';
	@Input() highlightBgColor: string = 'blue';
	@HostBinding('style.backgroundColor') backgroundColor: string | undefined;
	@HostBinding('style.color') color: string = 'black';


	constructor() {
	}

	ngOnInit(): void {
		this.backgroundColor = this.defaultBgColor;
	}

	@HostListener('mouseenter') onMouseOver(eventData: Event) {
		this.backgroundColor = this.highlightBgColor;
		this.color = 'white';
	}

	@HostListener('mouseleave') onMouseLeave(eventData: Event) {
		this.backgroundColor = this.defaultBgColor;
		this.color = 'black';
	}


}
