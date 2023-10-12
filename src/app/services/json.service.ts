import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '@usertypes/types';


@Injectable({
    providedIn: 'root'
})
export class JsonService {
    private dataUrl = 'assets/sample.json';

    constructor(private http: HttpClient) { }

    /**
     * Fetches a JSON response, parses it and converts it into a 1D array
     * to be searched through.
     *
     * @returns {Item[]} Array of items to search through
     */
    public fetchSearchList(): Observable<Item[]> {
        return this.http.get<any>(this.dataUrl).pipe(
            map(data => {
                const objectList = data.objectList;
                let itemArray: Item[] = [];

                // Get rid of property containing array
                for (let property in objectList) {
                    if (objectList.hasOwnProperty(property) && Array.isArray(objectList[property])) {
                        itemArray = itemArray.concat(objectList[property]);
                    }
                }

                return itemArray;
            })
        );
    }
}
