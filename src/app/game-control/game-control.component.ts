import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
	selector: 'app-game-control',
	templateUrl: './game-control.component.html',
	styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
	@Output() internalFired = new EventEmitter<number>();
	// @ts-ignore
	interval: NodeJS.Timeout;
	lastNumber = 0;

	constructor() {
	}

	ngOnInit(): void {
	}

	onStartGame() {
		this.interval = setInterval(() => {
			this.internalFired.emit(this.lastNumber + 1);
			this.lastNumber++;
		}, 1000);
	}

	onPauseGame() {
		clearInterval(this.interval);
	}
}
