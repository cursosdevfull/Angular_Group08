import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthUseCase } from '../../core/application/auth.usecase';

@Directive({
  selector: '[roles-allowed]',
})
export class RolesAllowedDirective {
  @Input('roles-allowed') rolesAllowed: string[] = [];
  hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private authUseCase: AuthUseCase
  ) {}

  ngOnInit() {
    this.execute();
  }

  execute() {
    const isUserLogged = this.authUseCase.isAuthenticated();
    const rolesUser = this.authUseCase.getRoles();

    const lengthRolesAllowed = this.rolesAllowed.length;
    let userAuthorized = false;

    for (let ind = 0; ind < lengthRolesAllowed; ind++) {
      if (rolesUser.includes(this.rolesAllowed[ind])) {
        userAuthorized = true;
        break;
      }
    }

    if (isUserLogged && userAuthorized && !this.hasView) {
      if (!this.hasView) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
        this.hasView = true;
      }
    } else {
      this.viewContainerRef.clear();
      this.hasView = false;
    }
  }
}
