import { Component, OnInit } from '@angular/core';
import { JsonService } from '@services/json.service';
import { FuzzySearchService } from '@services/fuzzy-search.service';
import { Item } from '@usertypes/types';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent { }
