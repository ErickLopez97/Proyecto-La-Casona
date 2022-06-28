import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { InfoProductoService } from '../../services/infoproduct.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public form: FormGroup;
  producto: Product[] = [];

  constructor(public servicio: InfoProductoService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({

    })
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['',[Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      message: ['',[Validators.required, Validators.maxLength(256)]],
      list: ['',Validators.required]
    })
    this.servicio.getProducts().subscribe((products) => {
      this.producto = products;
      console.log(products);
    })
  }

  send(): any{
    console.log(this.form.value);
    this.form.reset();
  }

  onSubmit() {
  //   if (this.form.status == "VALID" && this.honeypot.value == "") {
  //     this.form.disable(); // disable the form if it's valid to disable multiple submissions
  //     var formData: any = new FormData();
  //     formData.append("name", this.form.get("name").value);
  //     formData.append("email", this.form.get("email").value);
  //     formData.append("message", this.form.get("message").value);
  //     this.isLoading = true; // sending the post request async so it's in progress
  //     this.submitted = false; // hide the response message on multiple submits
  //     this.http.post("YOUR GOOGLE WEB APP URL HERE", formData).subscribe(
  //       (response) => {
  //         // choose the response message
  //         if (response["result"] == "success") {
  //           this.responseMessage = "Thanks for the message! I'll get back to you soon!";
  //         } else {
  //           this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
  //         }
  //         this.form.enable(); // re enable the form after a success
  //         this.submitted = true; // show the response message
  //         this.isLoading = false; // re enable the submit button
  //         console.log(response);
  //       },
  //       (error) => {
  //         this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
  //         this.form.enable(); // re enable the form after a success
  //         this.submitted = true; // show the response message
  //         this.isLoading = false; // re enable the submit button
  //         console.log(error);
  //       }
  //     );
  //   }
  }
}