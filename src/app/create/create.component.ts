import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Web3Enabled } from '../web3Enabled';
import Web3 from 'web3';
import { WEB3 } from '../web3';
import BigNumber from 'bignumber.js';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends Web3Enabled implements OnInit {
  summoner: string;

  FACTORY_ADDRESS: string;
  DEFAULT_WITHDRAW_LIMIT: BigNumber;
  DEFAULT_CONSENSUS_THRESHOLD: BigNumber;

  constructor(@Inject(WEB3) web3: Web3, private route: ActivatedRoute) {
    super(web3);
    
    this.summoner = this.route.snapshot.paramMap.get("summoner");
    this.FACTORY_ADDRESS = "0x95Bc65D80990B4a1Cc50F78EeF30199422dFb9BF";
    this.DEFAULT_WITHDRAW_LIMIT = new BigNumber(`${1000 * 1e18}`);
    this.DEFAULT_CONSENSUS_THRESHOLD = new BigNumber(0.75 * 1e18);
  }

  ngOnInit() {
    this.connect(
      () => {
        // Initialize factory contract
        const abi = require('../../assets/abis/PaidFantastic12Factory.json');
        const factory = new this.web3.eth.Contract(abi, this.FACTORY_ADDRESS);

        // Call createSquad()
        this.sendTx(factory.methods.createSquad(this.summoner, this.DEFAULT_WITHDRAW_LIMIT.toFixed(), this.DEFAULT_CONSENSUS_THRESHOLD.toFixed()), console.log, console.log, console.log);
      },
      (e) => {
        // Wallet not connected
        // TODO: notify the user
        console.log(JSON.stringify(e));
      }
    );
  }
}
