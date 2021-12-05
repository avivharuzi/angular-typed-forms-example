import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface TypedFormWithInterface {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  age: FormControl<number | null>;
  job: FormGroup<{
    name: FormControl<string | null>;
  }>;
  projects: FormArray<
    FormGroup<{
      path: FormControl<string | null>;
    }>[]
  >;
}

@Component({
  selector: 'angular-typed-forms-example-typed-forms',
  templateUrl: './typed-forms.component.html',
  styleUrls: ['./typed-forms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypedFormsComponent {
  typedForm = new FormGroup({
    firstName: new FormControl<string>(''),
    lastName: new FormControl<string>(''),
    age: new FormControl<number>(25),
    job: new FormGroup({
      name: new FormControl<string>(''),
    }),
    projects: new FormArray([
      new FormGroup({
        path: new FormControl<string>(''),
      }),
    ]),
  });

  inheritedTypedForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(25),
    job: new FormGroup({
      name: new FormControl(''),
    }),
    projects: new FormArray([
      new FormGroup({
        path: new FormControl(''),
      }),
    ]),
  });

  typedFormWithInterface: FormGroup<TypedFormWithInterface> = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(25),
    job: new FormGroup({
      name: new FormControl(''),
    }),
    projects: new FormArray([
      new FormGroup({
        path: new FormControl(''),
      }),
    ]),
  });

  typedFormWithFormBuilder = this.formBuilder.group({
    firstName: this.formBuilder.control<string>(''),
    lastName: this.formBuilder.control<string>(''),
    age: this.formBuilder.control<number>(25),
    job: this.formBuilder.group({
      name: this.formBuilder.control<string>(''),
    }),
    projects: this.formBuilder.array([
      this.formBuilder.group({
        path: this.formBuilder.control<string>(''),
      }),
    ]),
  });

  constructor(private formBuilder: FormBuilder) {}

  addProject(): void {
    this.typedForm.controls.projects.push(
      new FormGroup({
        path: new FormControl<string>(''),
      })
    );
  }

  removeProject(index: number): void {
    this.typedForm.controls.projects.removeAt(index);
  }

  onSubmit(): void {
    const value = this.typedForm.value;
    console.log(value);
  }
}
