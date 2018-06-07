import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { Page1Component } from './components/page1/page1.component';
import { DragDropComponent } from './components/dragDrop/dragDrop.component';


const routes: Routes = [
    { path: 'page1', component: Page1Component },
    { path: 'home', component: HomeComponent },
    { path: 'drag-drop', component: DragDropComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);
