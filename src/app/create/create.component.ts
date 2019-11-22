import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Web3Enabled } from '../web3Enabled';
import Web3 from 'web3';
import { WEB3 } from '../web3';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends Web3Enabled implements OnInit {
  summoner: string;

  FACTORY_ADDRESS: string;

  constructor(@Inject(WEB3) web3: Web3, private route: ActivatedRoute) {
    super(web3);
    
    this.summoner = this.route.snapshot.paramMap.get("summoner");
    this.FACTORY_ADDRESS = "0x3aB8424653C21c918D878FED06FC65C47aC00083";
  }

  ngOnInit() {
    this.connect(
      () => {
        // Initialize factory contract
        const abi = require('../../assets/abis/Fantastic12Factory.json');
        const factory = new this.web3.eth.Contract(abi, this.FACTORY_ADDRESS);

        // Call createSquad()
        this.sendTx(factory.methods.createSquad(this.summoner), console.log, console.log, console.log);
      },
      () => {
        // Wallet not connected
        // TODO: notify the user
      }
    );
  }
}
