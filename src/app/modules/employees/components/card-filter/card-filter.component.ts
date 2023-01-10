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
  isShow: boolean;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Employee) => {
      this.employee.name = params.name;
      this.employee.email = params.email;
      this.employee.phone = params.phone;
      this.employee.company = params.company;
      this.employee.country = params.country;
      this.employee.date = params.date;
    });
  }

  setQuery() {
    console.log(this.employee);
    this.router.navigate(['/employees'], {
      queryParams: {
        name: this.employee.name,
        email: this.employee.email,
        phone: this.employee.phone,
        country: this.employee.country,
        company: this.employee.company,
        date: this.employee.date,
      },
    });
  }

  items = [
    {
      title: 'email',
      type: 'text',
    },
    {
      title: 'phone',
      type: 'text',
    },
    {
      title: 'name',
      type: 'text',
    },
    {
      title: 'company',
      type: 'text',
    },
    {
      title: 'country',
      type: 'dropdown',
      api: 'http://countryapi.gear.host/v1/Country/getCountries?pLimit=25&pPage=1',
      multiple: false,
    },
    {
      title: 'date',
      type: 'date',
    },
  ];

  countries = [
    { country: 'egypt' },
    { country: 'saudi arabia' },
    { country: 'emirate' },
    { country: 'qatar' },
  ];
}
