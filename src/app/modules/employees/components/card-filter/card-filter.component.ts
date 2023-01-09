import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../../../core/models/employee';

@Component({
  selector: 'app-card-filter',
  templateUrl: './card-filter.component.html',
  styleUrls: ['./card-filter.component.scss'],
})
export class CardFilterComponent implements OnInit {
  employee: Employee = new Employee();

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Employee) => {
      // this.employee = { ...params['keys'], ...params };

      this.employee.name = params.name;
      this.employee.phone = params.phone;
      this.employee.country = params.country;
      this.employee.date = params.date;
    });
  }

  setQuery() {
    console.log(this.employee);
    this.router.navigate(['/employees'], {
      queryParams: {
        name: this.employee.name,
        phone: this.employee.phone,
        country: this.employee.country,
        date: this.employee.date,
      },
    });
  }



}
