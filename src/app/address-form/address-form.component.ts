import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  
  public editAddressForm: FormGroup;
  public atLeastOneLocationRequiredMessage = 'Error: Please Enter Either City/State or Zip Code.';
  
  constructor(
    public formBuilder: FormBuilder,
    public cdr: ChangeDetectorRef
  ) {
    this.editAddressForm = this.formBuilder.group({
      'mailStopCode': [null, [Validators.maxLength(50)]],
      'inCareOf': [null, [Validators.maxLength(50)]],
      'attentionLine': [null, [Validators.maxLength(50)]],
      'streetNumber': [null, [Validators.maxLength(32)]],
      'fractional': [null, [Validators.maxLength(50)]],
      'predirectional': [null, [Validators.maxLength(8)]],
      'streetName': [null, [Validators.required, Validators.maxLength(64)]],
      'streetType': [null, [Validators.maxLength(8)]],
      'postdirectional': [null, [Validators.maxLength(8)]],
      'unitType': [null, [Validators.maxLength(8)]],
      'unitNumber': [null, [Validators.maxLength(8)]],
      'privateMailBoxNumber': [null, [Validators.maxLength(50)]],
      'city': [null, [Validators.maxLength(32)]],
      'state': [null, [Validators.maxLength(16)]],
      'postalCode': [null, [Validators.maxLength(5), PostalCodeValidator]],
      'postalCodeExtension': [null, [Validators.maxLength(4), PostalCodeExtensionValidator]]
    }, { validator: atLeastOneLocationRequired });

  }
  
  ngOnInit(){
  }
  
  public get isAtLeastOneLocationRequired(): boolean {
    if (this.editAddressForm?.errors?.atLeastOneLocationRequired
      && this.editAddressForm?.controls?.city?.touched && this.editAddressForm?.controls?.state?.touched) {
      return true;
    } else {
      return false;
    }
  }
  
}

export const PostalCodeValidator = Validators.pattern(/^\d{5}$/);
export const PostalCodeExtensionValidator = Validators.pattern(/^\d{4}$/);

export function atLeastOneLocationRequired(group : FormGroup) : {[s:string ]: boolean} {
  var cityCtrl = group.controls.city;
  var stateCtrl = group.controls.state;
  var postalCodeCtrl = group.controls.postalCode;

  if (cityCtrl != undefined && stateCtrl != undefined && postalCodeCtrl != undefined)
    if (!(((cityCtrl.value && cityCtrl.value.length) && (stateCtrl.value && stateCtrl.value.length)) || (postalCodeCtrl.value && postalCodeCtrl.value.length)))
      return { atLeastOneLocationRequired: true };
}


