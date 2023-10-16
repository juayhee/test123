import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonService } from '@services/json.service';
import { Item } from '@usertypes/types';

@Component({
    selector: 'app-item-details',
    templateUrl: './item-details.component.html',
    styleUrls: ['./item-details.component.sass']
})
export class ItemDetailsComponent implements OnInit {
    name: string = "";
    item!: Item;

    constructor(private route: ActivatedRoute,
        private jsonService: JsonService) { }

    ngOnInit(): void {
        this.jsonService.ensureDataLoaded().subscribe(() => {
            const name = this.route.snapshot.paramMap.get('name');
            if (name !== null) {
                this.name = name;
                this.item = this.jsonService.getItemByName(this.name);
            }
        });
    }
}
