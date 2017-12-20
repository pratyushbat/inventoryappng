import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,FormControl
  } from '@angular/forms';
import {  Validators,
  AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: ['./demo-form-sku.component.css']
})
export class DemoFormSkuComponent implements OnInit {
myForm: FormGroup;
// to show ng pristine we have to do this
sku: AbstractControl;

name: AbstractControl;
email: AbstractControl;
password: AbstractControl;

productName: string;
//   constructor(fb: FormBuilder) {
//     // let control = new FormControl('sku', Validators.required);
//     // Or in our case, because we’re using FormBuilder we will use the following syntax:
//     this.myForm=fb.group({
// 'sku': ['ABC123',Validators.required]
//     });

//    }

  ngOnInit() {
console.log("ng inited");
  }
  onSubmit(form:any):void{
    console.log('you submitted form from here',form);
  }


  skuValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^123/)) {
    return {invalidName: true};
    }
    }

    emailValidator(control) {
      // RFC 2822 compliant regex
      if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
          return null;
      } else {
          return { 'invalidEmailAddress': true };
      }
  }


   passwordValidator(control) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
        return null;
    } else {
        return { 'invalidPassword': true };
    }
}



// Using FormBuilder
// We inject FormBuilder by creating an argument in the constructor of our component class:
// What does inject mean? We haven’t talked much about dependency injection (DI) or
// how DI relates to the hierarchy tree, so that last sentence may not make a lot of sense.
// We talk a lot more about dependency injection in the Dependency Injection chapter, so go
// there if you’d like to learn more about it in depth.
// At a high level, Dependency Injection is 


// During injection an instance of FormBuilder will be created and we assign it to the fb variable (in
//   the constructor).
//   There are two main functions we’ll use on FormBuilder :
//   • control - creates a new FormControl
//   • group - creates a new FormGroup
//   Notice that we’ve setup a new instance variable called myForm on this class. (We could have just as
//   easily called it form , but I want to differentiate between our FormGroup and the form we had before.)
//   myForm is typed to be a FormGroup . We create a FormGroup by calling fb.group() . .group takes an
//   object of key-value pairs that specify the FormControl s in this group.
//   In this case, we’re setting up one control sku , and the value is ["ABC123"] - this says that the default
//   value of this control is "ABC123" . (You’ll notice that is an array. That’s because we’ll be adding more
//   configuration options there later.)
//   Now that we have myForm we need to use that in the view (i.e. we need to bind it to our form
//   element).




// Now we need to use our validation in the view. There are two ways we can access the validation
// value in the view:
// 1. We can explicitly assign the FormControl sku to an instance variable of the class - which is
// more verbose, but gives us easy access to the FormControl in the view.
// 2. We can lookup the FormControl sku from myForm in the view. This requires less work in the
// component definition class, but is slightly more verbose in the view.


constructor(fb: FormBuilder) {

  this.myForm=fb.group({
'sku': ['',Validators.compose([
  Validators.required])],
  'productName': ['',Validators.compose([
    Validators.required])],
'name': ['',Validators.compose([
  Validators.required, this.skuValidator])],
  'email': ['',Validators.compose([
    Validators.required,this.emailValidator])],

  'password': ['',Validators.compose([
    Validators.required,this.passwordValidator])]
  });
  this.sku = this.myForm.controls['sku'];
  this.name = this.myForm.controls['name'];
  this.email = this.myForm.controls['email'];
  this.password = this.myForm.controls['password'];
  this.sku.valueChanges.subscribe( (value : string) =>{console.log('sku changed to :',value);});
  
  this.myForm.valueChanges.subscribe((form:any) => { console.log('form changed to',form);});
  
  
  // this.name.valueChanges.subscribe( (value : string) =>{console.log('sku changed to :',value);});
  // this.email.valueChanges.subscribe( (value : string) =>{console.log('sku changed to :',value);});
  this.password.valueChanges.subscribe( (value : string) =>{console.log('sku changed to :',value);});

 
  

  // This is great because it means we can reference sku anywhere in our component view. The downside
  // is that by doing it this way, we’d have to setup an instance variable for every field in our form.
  // For large forms, this can get pretty verbose.
  // Now that we have our sku being validated, I want to look at four different ways we can use it in
  // our view:
  // 1.  Checking the validity of our whole form and displaying a message
  // 2.  Checking the validity of our individual field and displaying a message
  // 3. Checking the validity of our individual field and coloring the field red if it’s invalid

 }


}