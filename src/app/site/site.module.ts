import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';

import { LayoutModule } from '@app/layout';
import { SiteComponent } from './site.component';

@NgModule({
    declarations: [SiteComponent],
    imports: [
        CommonModule,
        SiteRoutingModule,
        LayoutModule
    ]
})
export class SiteModule { }
