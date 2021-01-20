import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from '@pages/page-not-found';

const routes: Routes = [{
    path: 'site',
    loadChildren: () => import('./site/site.module').then(m => m.SiteModule)
}, {
    path: '',
    redirectTo: '/site',
    pathMatch: 'full'
}, {
    path: '**',
    component: PageNotFoundComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
