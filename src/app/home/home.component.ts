import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ColumnType } from '../shared/columnType.enum';
import { TextData } from '../shared/TextData';
import { BooleanData } from '../shared/booleanData';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  form: FormGroup;
  script: string;

  types = ColumnType;


  constructor(fb: FormBuilder) {
    this.form = fb.group({
      tableName: [''],
      column1: fb.group({
        name: [''],
        type: [''],
      }),
      column2: fb.group({
        name: [''],
        type: [''],
      }),
      column3: fb.group({
        name: [''],
        type: [''],
      }),
      column4: fb.group({
        name: [''],
        type: [''],
      })
    })
  }

  generateScript() {
    this.script = "";
    for (let i = 0; i < 10; i++) {
      let value1: string = ""
      let value2: string = ""
      let value3: string = ""
      let value4: string = ""
      console.log(this.form.get('column1'))
      if (this.form.get('column1').get('type').value == 'VARCHAR') {
        value1 = TextData.getRandomText();
      } else if (this.form.get('column1').get('type').value == 'BOOLEAN') {
        value1 = BooleanData.getRandomBoolean() ? "S" : "N";
      }
      if (this.form.get('column2').get('type').value == 'VARCHAR') {
        value2 = TextData.getRandomText();
      } else if (this.form.get('column2').get('type').value == 'BOOLEAN') {
        value2 = BooleanData.getRandomBoolean() ? "S" : "N";
      }
      if (this.form.get('column3').get('type').value == 'VARCHAR') {
        value3 = TextData.getRandomText();
      } else if (this.form.get('column3').get('type').value == 'BOOLEAN') {
        value3 = BooleanData.getRandomBoolean() ? "S" : "N";
      }
      if (this.form.get('column4').get('type').value == 'VARCHAR') {
        value4 = TextData.getRandomText();
      } else if (this.form.get('column4').get('type').value == 'BOOLEAN') {
        value4 = BooleanData.getRandomBoolean() ? "S" : "N";
      }

      this.script += `INSERT INTO ${this.form.get('tableName').value}
                             (${this.form.get('column1').get('name').value}, 
                              ${this.form.get('column2').get('name').value},
                              ${this.form.get('column3').get('name').value},
                              ${this.form.get('column4').get('name').value})
                              VALUES ('${value1}', '${value2}', '${value3}', '${value4}');\n`

    }


  }

}
