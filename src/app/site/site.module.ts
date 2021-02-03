import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SiteRoutingModule } from './site-routing.module';

import { LayoutModule } from '@app/layout';
import { SiteComponent } from './site.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { PricesComponent } from './prices/prices.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { PresentationComponent } from './presentation/presentation.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SiteComponent,
        NavigationBarComponent,
        FooterComponent,
        ProductsComponent,
        SolutionsComponent,
        PricesComponent,
        IntegrationsComponent,
        PresentationComponent,
        AboutUsComponent,
        ContactComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,

        SiteRoutingModule,
        LayoutModule,

        ReactiveFormsModule,

        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatInputModule,
        MatFormFieldModule
    ]
})
export class SiteModule { }
