import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Item } from '@usertypes/types';

@Injectable({
    providedIn: 'root'
})
export class JsonService {
    private dataUrl = 'assets/sample.json';
    private isDataLoaded = false;
    private itemList: Item[] = [];

    constructor(private http: HttpClient) {
        this.fetchitemList().subscribe(data => {
            this.itemList = data;
            this.isDataLoaded = true;
        });
    }

    public ensureDataLoaded(): Observable<Item[]> {
        if (this.isDataLoaded) {
            return of(this.itemList);
        } else {
            return this.fetchitemList().pipe(
                tap(data => {
                    this.itemList = data;
                    this.isDataLoaded = true;
                })
            );
        }
    }

    private fetchitemList(): Observable<Item[]> {
        return this.http.get<any>(this.dataUrl).pipe(
            map(data => {
                const objectList = data.objectList;
                let itemArray: Item[] = [];

                for (let property in objectList) {
                    if (objectList.hasOwnProperty(property) && Array.isArray(objectList[property])) {
                        itemArray = itemArray.concat(objectList[property]);
                    }
                }

                return itemArray;
            })
        );
    }

    public getItemByName(name: string): Item {
        const foundItem = this.itemList.find(item => item.name === name);
        return foundItem as Item;
    }
}
