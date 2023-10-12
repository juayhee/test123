import { Component, OnInit } from '@angular/core';
import { JsonService } from '@services/json.service';
import { FuzzySearchService } from '@services/fuzzy-search.service';
import { Item } from '@usertypes/types';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    title = 'App';
    searchList: Item[] = [];
    searchView: Item[] = [];
    searchTerm: string = "";

    constructor(private jsonService: JsonService,
        private fuzzySearchService: FuzzySearchService) {
    }

    ngOnInit(): void {
        this.jsonService.fetchSearchList().subscribe(data => {
            this.searchList = data;
            this.searchView = data;
        });
    }

    public fuzzySearch(event: Event): void {
        const inputEvent = event as InputEvent;
        if (inputEvent.inputType == "deleteContentBackward") {
            console.log("here");
            this.searchTerm = this.searchTerm.slice(0, -1);
        } else {
            const searchCharacter: string = inputEvent.data as string;
            this.searchTerm += searchCharacter;
        }

        if (this.searchTerm.length == 0) {
            this.searchView = this.searchList;
        } else {
            this.searchView = this.fuzzySearchService.search(this.searchList, this.searchTerm);
        }
    }
}
