import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { TableComponent } from './table/table.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/table', pathMatch: 'full' }, // Default route redirects to /table
    { path: 'table', component: TableComponent },
    { path: 'details/:name', component: ItemDetailsComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        ItemDetailsComponent,
        TableComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
