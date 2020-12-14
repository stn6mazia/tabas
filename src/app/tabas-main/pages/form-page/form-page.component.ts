import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../services/address.service';
import { RentFormData } from '../../shared/rent-form-data';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {


  saved = false

  returnedZip = false

  disabledBtn
  formData = {
    user: {
      name: '',
      email: '',
      phoneNumber: '',
      document: '',
    },
    timestamp: {
      init: '',
      end: '',
    },
    rentValues: {
      min: 0,
      max: 0,
    },
    locationInformation: {
      zipCode: '',
      address: '',
      neightborhood: '',
      city: '',
      state: '',
      country: '',
    }
  }
  constructor(
    private addressService: AddressService
  ) { }

  ngOnInit() {

    this.disabledBtn = true
  }

  checkZipCode() {
    if (this.formData.locationInformation.zipCode.length > 7) {
      this.addressService.getAddressByZip(this.formData.locationInformation.zipCode).subscribe(
        res => {
          this.returnedZip = true
          this.formData.locationInformation.address = res.logradouro
          this.formData.locationInformation.city = res.localidade
          this.formData.locationInformation.state = res.uf
          this.formData.locationInformation.neightborhood = res.bairro
          this.checkForm()
        }
      )
    }
  }

  checkForm() {
    if (
      this.formData.locationInformation.address.length > 0 &&
      this.formData.locationInformation.city.length > 0 &&
      this.formData.locationInformation.neightborhood.length > 0 &&
      this.formData.locationInformation.state.length > 0 &&
      this.formData.locationInformation.zipCode.length > 0 &&
      this.formData.rentValues.max > 0 &&
      this.formData.rentValues.min > 0 &&
      this.formData.timestamp.end.length > 0 &&
      this.formData.timestamp.init.length > 0 &&
      this.formData.user.document.length > 0 &&
      this.formData.user.email.length > 0 &&
      this.formData.user.name.length > 0 &&
      this.formData.user.phoneNumber.length > 0
    ) {
      this.disabledBtn = false
    } else {
      this.disabledBtn = true
    }
  }

  sendInformation() {
    this.saved = true
  }

}
