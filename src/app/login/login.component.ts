import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login.component',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
onSubmit(){

}
Builder = inject(FormBuilder);
loginForm = this.Builder.group({
  email: [''],
  password: ['']
})
}
