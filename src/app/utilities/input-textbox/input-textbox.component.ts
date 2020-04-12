
import { Component, OnInit, Input, EventEmitter, Output, forwardRef, Injector } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, NgForm, FormGroupDirective, NgControl } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class CustomFieldErrorMatcher implements ErrorStateMatcher {
  constructor(private customControl: FormControl, private errors: any) { }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return this.customControl && this.customControl.touched && (this.customControl.invalid || this.errors);
  } 
}

@Component({
  selector: 'app-input-textbox',
  templateUrl: './input-textbox.component.html',
  styleUrls: ['./input-textbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextboxComponent),
      multi: true
    }
  ]
})

// Resource: https://stackoverflow.com/questions/58459617/component-for-wrap-angular-material-input-does-not-show-error-styles

export class InputTextboxComponent implements OnInit, ControlValueAccessor {
  @Input() MaxLength: string;
  @Input() Disabled: boolean = false;
  @Input() ReadOnly: boolean;
  @Input() FocusIn: boolean;
  @Input() Width: string;
  @Input() NgClass: string;
  @Input() Appearance: string = "outline";
  @Input() Value: string;
  @Input() type: string;
  @Input() Label: string;
  @Input() Hint: string;
  @Input() PlaceHolder: string;
  @Input() ErrorMessage: string;
  
  @Output() saveValue = new EventEmitter();
  @Output() onStateChange = new EventEmitter();
  @Input() errors: any = null;
  disabled: boolean;
  control: FormControl;
  onTouched = () => { };

  constructor(public injector: Injector) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const ngControl: NgControl = this.injector.get(NgControl, null);
    if (ngControl) {
      setTimeout(() => {
        this.control = ngControl.control as FormControl;
      })
    }
  }

  saveValueAction(e) {
    this.saveValue.emit(e.target.value);
  }

  //control value accessor init
  writeValue(value: any) {
    this.Value = value ? value : '';
  }

  onChange(e) {
    this.Value = e;
  }

  onBlur(e) {
    this.onTouched();
    this.onStateChange.emit(e);
  }

  registerOnChange(fn: any) { this.onChange = fn; }

  registerOnTouched(fn: any) { this.onTouched = fn; }

  setDisabledState(isDisabled) { this.disabled = isDisabled; }

  errorMatcher() {
    return new CustomFieldErrorMatcher(this.control, this.errors)
  }

  readonly errorStateMatcher: ErrorStateMatcher = {
    isErrorState: (ctrl: FormControl) => (ctrl && ctrl.invalid)
  };

}
