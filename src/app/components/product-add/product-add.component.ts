import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';
import { Product } from '../../model/Product';
import { Admin } from '../../model/Admin';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: Product = new Product(0, "", "", 0, 0, 0, 0, []);
  admin: Admin = new Admin();
  adminId: number = 0;
  detailsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private detailsService: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.detailsForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      sku: ['', Validators.required],
      image: [null]
    });

  }

  ngOnInit(): void {
    this.adminId = this.route.snapshot.params['adminId'];
    console.log(this.adminId);
    this.detailsService.getAdminById(this.adminId).subscribe(data => {
      this.admin = data;
    });
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.detailsForm.patchValue({
        image: file
      });
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('image', this.detailsForm.get('image')!.value);
    formData.append('name', this.detailsForm.get('name')!.value);
    formData.append('description', this.detailsForm.get('description')!.value);
    formData.append('price', this.detailsForm.get('price')!.value);
    formData.append('sku', this.detailsForm.get('sku')!.value);
    this.detailsService.addProduct(formData, this.adminId).subscribe(response => {
      console.log(response);
      window.alert("Product added Successfully!")
      // Optionally navigate to another route after successful submission
      // this.router.navigate(['admin',this.adminId]);
    });
  }
}
