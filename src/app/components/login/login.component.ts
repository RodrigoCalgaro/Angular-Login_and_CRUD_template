import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  ingresar(){
    const usuario = this.form.value.usuario
    const password = this.form.value.password

    // acá debería hacer una petición al backend para logearme
    if (usuario == 'admin' && password == 'admin123'){ 
      this.loading = true;
      setTimeout(()=>{
        this.loading = false;
      }, 2000)
      this.router.navigate(['home']);
    } else {
      this.error()
      this.form.reset()
    }
  }

  error(){
    this._snackBar.open('Usuario o contraseña incorrecto. Usuario: admin Pass: admin123', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
