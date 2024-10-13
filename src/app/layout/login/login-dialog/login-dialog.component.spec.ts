import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule, FormBuilder } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { By } from "@angular/platform-browser";
import { LoginDialogComponent } from "./login-dialog.component";

describe("LoginDialogComponent", () => {
  let component: LoginDialogComponent;
  let fixture: ComponentFixture<LoginDialogComponent>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<LoginDialogComponent>>;

  beforeEach(async () => {
    dialogRefSpy = jasmine.createSpyObj("MatDialogRef", ["close"]);

    await TestBed.configureTestingModule({
      declarations: [LoginDialogComponent],
      imports: [
        ReactiveFormsModule,
        NoopAnimationsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
      ],
      providers: [
        FormBuilder,
        { provide: MatDialogRef, useValue: dialogRefSpy },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("debería crear el componente", () => {
    expect(component).toBeTruthy();
  });

  it("debería tener un formulario inválido cuando está vacío", () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it("debería requerir que los campos de nombre de usuario y contraseña estén llenos", () => {
    const usernameControl = component.loginForm.controls["username"];
    const passwordControl = component.loginForm.controls["password"];

    expect(usernameControl.valid).toBeFalsy();
    expect(passwordControl.valid).toBeFalsy();

    expect(usernameControl.hasError("required")).toBeTruthy();
    expect(passwordControl.hasError("required")).toBeTruthy();
  });

  it("debería validar el formulario cuando se proporcionan nombre de usuario y contraseña", () => {
    const usernameControl = component.loginForm.controls["username"];
    const passwordControl = component.loginForm.controls["password"];

    usernameControl.setValue("usuario");
    passwordControl.setValue("contraseña");

    expect(component.loginForm.valid).toBeTruthy();
  });

  it("debería cerrar el diálogo y pasar el valor del formulario cuando el formulario es válido y se envía", () => {
    component.loginForm.controls["username"].setValue("usuario");
    component.loginForm.controls["password"].setValue("contraseña");

    component.onSubmit();

    expect(dialogRefSpy.close).toHaveBeenCalledWith({
      username: "usuario",
      password: "contraseña",
    });
  });

  it("no debería cerrar el diálogo cuando el formulario es inválido y se envía", () => {
    component.onSubmit();

    expect(dialogRefSpy.close).not.toHaveBeenCalled();
  });

  it("debería mostrar mensajes de error requeridos cuando los campos son tocados pero no están llenos", () => {
    const usernameInput = fixture.debugElement.query(
      By.css('input[formControlName="username"]')
    ).nativeElement;
    const passwordInput = fixture.debugElement.query(
      By.css('input[formControlName="password"]')
    ).nativeElement;

    usernameInput.dispatchEvent(new Event("blur"));
    passwordInput.dispatchEvent(new Event("blur"));

    fixture.detectChanges();

    const usernameError = fixture.debugElement.query(
      By.css(".app-login__error")
    ).nativeElement;
    expect(usernameError.textContent).toContain("El usuario es obligatorio.");

    const passwordError = fixture.debugElement.queryAll(
      By.css(".app-login__error")
    )[1].nativeElement;
    expect(passwordError.textContent).toContain(
      "La contraseña es obligatoria."
    );
  });
});
