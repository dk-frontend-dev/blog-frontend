import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store'

import {environment} from '@env/environment.prod'
import {AppRoutingModule} from '@/app-routing.module'
import {AppComponent} from '@/app.component'
import {AuthModule} from '@/auth/auth.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      router: routerReducer
    }),
    AuthModule,
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 20,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
