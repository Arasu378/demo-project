import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoggingService} from '../../utils/logging.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';
import {FacadeService} from '../../api-service/facade.service';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy, AfterViewInit {

  userForm: FormGroup;
  subscription: Subscription;
  userId: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  buttonText = 'Add User';
  // private subscription: Subscription;
  private subscriptionData: Subscription;
  // @ViewChild('button_data') elementRef: ElementRef;
  constructor(private formBuilder: FormBuilder,
              private logger: LoggingService,
              private facadeService: FacadeService,
              private userService: UsersService,
              private route: ActivatedRoute,
              private renderer: Renderer2) { }

  ngOnInit() {
    this.facadeService.getUserService();
    this.createUserForm();
    this.route.params.subscribe(
      params => {
        this.userId = params['id'];
      }
    );
    if (this.userId != null) {
      this.subscriptionData = this.userService.userPublicData.subscribe(
        response => {
          this.firstName = response.firstName;
          this.lastName = response.lastName;
          this.phone = response.phone;
          this.email = response.email;
        }
      );
      this.userForm.patchValue({
        firstName: this.firstName,
        lastName: this.lastName,
        phone: this.phone,
        email: this.email
      });
      this.buttonText = 'Update User';
    }

  }
  ngAfterViewInit(): void {
    if (this.userId != null) {

    }
  }

  createUserForm(): void {
    this.userForm =  this.formBuilder.group({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      lastName: new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.email, Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      profile: new FormControl('', [Validators.required]),
      idDomain: new FormControl('26')
    });
  }

  getFirstNameError() {
    return this.userForm.get('firstName').hasError('required') ? 'You must enter first name' :
      this.userForm.get('firstName').hasError('minlength') ? 'You must enter minimum 3 characters' :
        this.userForm.get('firstName').hasError('maxlength') ? 'You must not exceed max characters 15' :
          '';
  }
  getLastNameError() {
    return this.userForm.get('lastName').hasError('required') ? 'You must enter last name' :
      this.userForm.get('lastName').hasError('minlength') ? 'You must enter minimum 3 characters' :
        this.userForm.get('lastName').hasError('maxlength') ? 'You must not exceed max characters 15' :
          '';
  }
  getPhoneError() {
    return this.userForm.get('phone').hasError('required') ? 'You must enter Phone' :
      this.userForm.get('phone').hasError('minlength') ? 'You must enter minimum 10 characters' :
        this.userForm.get('phone').hasError('maxlength') ? 'You must not exceed max characters 10' :
          '';
  }
  getEmailError() {
    return this.userForm.get('email').hasError('required') ? 'You must enter a email' :
      this.userForm.get('email').hasError('email') ? 'Not a valid email' :
        '';
  }
  insertUser(): void {
    this.logger.setConsoleLog(this.userForm.value);
    if (this.userId != null) {
      this.logger.setConsoleLog(this.userId);
      this.subscriptionData = this.facadeService.updateUser(this.userForm.value, this.userId)
        .subscribe(response => {
          this.logger.setConsoleLog('update log : ' + JSON.stringify(response));
        }, error2 => {
          this.logger.setConsoleLog('update error: ' + JSON.stringify(error2));
        });

    } else {
      this. subscriptionData = this.facadeService.insertUser(this.userForm.value)
        .subscribe( response => {
          this.logger.setConsoleLog('insert log : ' + JSON.stringify(response));
        }, error2 => {
          this.logger.setConsoleLog('insert Error; ' + JSON.stringify(error2));
        });
    }
  }
  ngOnDestroy(): void {
    // if (this.subscription != null) {
    //   this.subscription.unsubscribe();
    // }
    if (this.subscriptionData != null) {
      this.subscriptionData.unsubscribe();
    }
  }

}
