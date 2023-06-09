import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './containers/header/header.component';
import { FooterComponent } from './containers/footer/footer.component';
import { MainBannerComponent } from './shared/components/main-banner/main-banner.component';
import { OffersBlockComponent } from './shared/components/offers-block/offers-block.component';
import { BannerDiscoverComponent } from './shared/components/banner-discover/banner-discover.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainBannerComponent,
    OffersBlockComponent,
    BannerDiscoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
