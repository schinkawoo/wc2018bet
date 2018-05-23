import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';
import { ActivatedRoute } from '@angular/router';

export abstract class RouteComponent implements OnInit {
    constructor(private route: ActivatedRoute, private titleService: TitleService) {
    }

    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.titleService.setTitle(data.title);
        });
    }
}
