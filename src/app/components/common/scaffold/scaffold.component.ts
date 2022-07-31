import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-scaffold',
    templateUrl: './scaffold.component.html',
    styleUrls: ['./scaffold.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScaffoldComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
