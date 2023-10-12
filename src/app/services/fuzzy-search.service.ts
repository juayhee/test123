import { Injectable } from '@angular/core';
import Fuse from 'fuse.js';
import { Item } from '@usertypes/types';

@Injectable({
    providedIn: 'root'
})
export class FuzzySearchService {

    constructor() { }

    public search(data: Item[], searchTerm: string): any[] {
        const options = {
            keys: ['name', 'value'], // Properties to search against
            threshold: 0.3 // Match sensitivity
        };

        const fuse = new Fuse(data, options);
        return fuse.search(searchTerm).map(result => result.item);
    }
}
