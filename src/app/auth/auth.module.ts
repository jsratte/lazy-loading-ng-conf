import { ModuleWithProviders } from '@angular/core';
import { SimpleAuthService } from './../shared/auth/simple-auth.service';

import { NgModule } from '@angular/core';
import { AuthService } from "app/shared/auth/auth.service";


@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [],
})
export class AuthModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AuthModule,
            providers: [
                { provide: AuthService, useClass: SimpleAuthService },
            ]
        }
    }
}
