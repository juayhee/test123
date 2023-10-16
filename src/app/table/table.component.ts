import { Component, OnInit } from '@angular/core';
import { JsonService } from '@services/json.service';
import { FuzzySearchService } from '@services/fuzzy-search.service';
import { Item } from '@usertypes/types';

@Component({
    selector: 'table-root',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {
    title = 'Item Table';
    searchList: Item[] = [];
    searchView: Item[] = [];
    searchTerm: string = "";

    constructor(private jsonService: JsonService,
        private fuzzySearchService: FuzzySearchService) {
    }

    ngOnInit(): void {
        this.jsonService.ensureDataLoaded().subscribe(data => {
            this.searchList = data;
            this.searchView = data;
        });
    }

    public fuzzySearch(event: Event): void {
        const inputEvent = event as InputEvent; // Guaranteed to be InputEvent

        // Adjust the current search term
        if (inputEvent.inputType == "deleteContentBackward") { // Backspace pressed
            this.searchTerm = this.searchTerm.slice(0, -1);
        } else {
            // Guaranteed to be non-empty, otherwise this handler wouldn't have
            // been called
            const searchCharacter: string = inputEvent.data as string;
            this.searchTerm += searchCharacter;
        }

        // If search term is empty, don't actually search, just display the
        // original search list
        if (this.searchTerm.length == 0) {
            this.searchView = this.searchList;
        } else {
            this.searchView = this.fuzzySearchService.search(this.searchList, this.searchTerm);
        }
    }
}
