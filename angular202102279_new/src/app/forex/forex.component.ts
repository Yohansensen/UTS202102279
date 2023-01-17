import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatCurrency } from '@angular/common';
declare const $ : any;


@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})
export class ForexComponent implements OnInit {
  private _table1 : any;

  constructor(private renderer : Renderer2, private http : HttpClient) { }

  ngAfterViewInit(): void{
    this.renderer.removeClass(document.body, "sidebar-open");
    this.renderer.addClass(document.body, "sidebar-closed");

    this._table1 = $("#table1").DataTable
    (
      {
        "colomnDefs" :
        [
          {
            "targets" : 2,
            "className" : "text-right"
            
          }
        ]
      }
    );
    this.getData();
  }

  ngOnInit(): void {
  }

  getData(): void{
    console.log("getData()");

    var url = "https://openexchangerates.org/api/latest.json?app_id=dee79e154b464cb5b6b40972ac61bfc9";

    this.http.get(url)
    .subscribe((data : any) => {
      console.log(data);
      
      var rates = data.rates;
      console.log(rates);

      var idr = rates.IDR;
      var idr2 = formatCurrency(idr, "en-US", "", "USD");
      console.log("USD : " + idr2);
      var row = [ 1, "USD", idr2 ];
      this._table1.row.add(row);

      var bnd = rates.IDR / rates.BND;
      var bnd2 = formatCurrency(bnd, "en-US", "", "BND");
      console.log("BND : " + bnd2);
      var row = [ 2, "BND", bnd2 ];
      this._table1.row.add(row);

      var hkd = rates.IDR / rates.HKD;
      var hkd2 = formatCurrency(hkd, "en-US", "", "HKD");
      console.log("HKD : " + hkd2);
      var row = [ 3, "HKD", hkd2 ];
      this._table1.row.add(row);

      var sgd = rates.IDR / rates.SGD;
      var sgd2 = formatCurrency(sgd, "en-US", "", "SGD");
      console.log("SGD : " + sgd2);
      var row = [ 4, "SGD", sgd2 ];
      this._table1.row.add(row);

      var btc = rates.IDR / rates.BTC;
      var btc2 = formatCurrency(btc, "en-US", "", "BTC");
      console.log("BTC : " + btc2);
      var row = [ 5, "BTC", btc2 ];
      this._table1.row.add(row);

      var jod = rates.IDR / rates.JOD;
      var jod2 = formatCurrency(jod, "en-US", "", "JOD");
      console.log("JOD : " + jod2);
      row = [6, "JOD", jod2];
      this._table1.row.add(row);

      var inr = rates.IDR / rates.INR;
      var inr2 = formatCurrency(inr, "en-US", "", "INR");
      console.log("INR : " + inr2);
      row = [7, "INR", inr2];
      this._table1.row.add(row);

      var srd = rates.IDR / rates.SRD;
      var srd2 = formatCurrency(srd, "en-US", "", "SRD");
      console.log("SRD : " + srd2);
      row = [8, "SRD", srd2];
      this._table1.row.add(row);

      var top = rates.IDR / rates.TOP;
      var top2 = formatCurrency(top, "en-US", "", "TOP");
      console.log("TOP : " + top2);
      row = [9, "TOP", top2];
      this._table1.row.add(row);

      var ves = rates.IDR / rates.VES;
      var ves2 = formatCurrency(ves, "en-US", "", "VES");
      console.log("VES : " + ves2);
      row = [10, "VES", ves2];
      this._table1.row.add(row);

      this._table1.draw(false);
    });
    }
  }