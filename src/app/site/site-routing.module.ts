import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntegrationsComponent } from '@site/integrations/integrations.component';
import { PresentationComponent } from '@site/presentation/presentation.component';
import { PricesComponent } from '@site/prices/prices.component';
import { ProductsComponent } from '@site/products/products.component';
import { SolutionsComponent } from '@site/solutions/solutions.component';

import { SiteComponent } from './site.component';

const routes: Routes = [{
    path: '',
    component: SiteComponent,
    children: [{
        path: 'presentation',
        component: PresentationComponent
    }, {
        path: 'products',
        component: ProductsComponent
    }, {
        path: 'solutions',
        component: SolutionsComponent
    }, {
        path: 'prices',
        component: PricesComponent
    }, {
        path: 'integrations',
        component: IntegrationsComponent
    }, {
        path: '',
        redirectTo: '/site/products',
        pathMatch: 'full'
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SiteRoutingModule { }
