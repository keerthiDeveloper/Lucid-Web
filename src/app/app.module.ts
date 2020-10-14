import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { OverviewFeatureComponent } from './components/overview-feature/overview-feature.component';
import { PricingPlansComponent } from './components/pricing-plans/pricing-plans.component';
import { ContactComponent } from './components/contact/contact.component';
import { IconCardComponent } from './shared-components/icon-card/icon-card.component';
import { PlanCardComponent } from './shared-components/plan-card/plan-card.component';
import { PricingCardComponent } from './shared-components/pricing-card/pricing-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    OverviewFeatureComponent,
    PricingPlansComponent,
    ContactComponent,
    IconCardComponent,
    PlanCardComponent,
    PricingCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
