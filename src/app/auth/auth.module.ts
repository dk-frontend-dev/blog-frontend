import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {RegisterComponent} from '@/auth/components/register/register.component'
import {AuthRoutingModule} from '@/auth/auth-routing.module'

@NgModule({
  imports: [CommonModule, AuthRoutingModule],
  declarations: [RegisterComponent],
  exports: [RouterModule]
})
export class AuthModule {}
