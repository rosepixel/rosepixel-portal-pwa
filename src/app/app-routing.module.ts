import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
    path: 'site',
    loadChildren: () => import('./site/site.module').then(m => m.SiteModule)
}, {
    path: '',
    redirectTo: '/site/products',
    pathMatch: 'full'
}, {
    path: '**',
    redirectTo: '/site/products'
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
