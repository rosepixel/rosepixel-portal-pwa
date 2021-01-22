import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from '@app/site/products/products.component';

import { SiteComponent } from './site.component';

const routes: Routes = [{
    path: '',
    component: SiteComponent,
    children: [{
        path: 'products',
        component: ProductsComponent
    }]
}, {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SiteRoutingModule { }
