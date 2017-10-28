import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as BWC from 'bitcore-wallet-client';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public b: any;

  constructor(public navCtrl: NavController) {
console.log('[home.ts.15] Constructor...'); //TODO
    var client = new BWC({
      verbose: true,
      baseUrl: 'https://bws.bitpay.com/bws/api',
    });

    var self = this;

    console.log('[home.ts.20] creating...'); //TODO
    client.createWallet("My Wallet", "Irene", 2, 2, {network: 'testnet'}, function(err, secret) {
      if (err) {
        console.log('error: ',err);
        return
      };
          console.log('[home.ts.21:client:]',secret); //TODO

      self.b= secret;
      // Handle err
      console.log('Wallet Created. Share this secret with your copayers: ' + secret);
    });
 
  }
}

