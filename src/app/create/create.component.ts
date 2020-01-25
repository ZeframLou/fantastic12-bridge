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
  txSubmitted: boolean;
  txHash: string;

  FACTORY_ADDRESS: string;
  DEFAULT_SHARE_NAME: string;
  DEFAULT_SHARE_SYMBOL: string;
  DEFAULT_SHARE_DECIMALS: number;
  DEFAULT_SUMMONER_SHARES: BigNumber;

  constructor(@Inject(WEB3) web3: Web3, private route: ActivatedRoute) {
    super(web3);
    
    this.summoner = this.route.snapshot.paramMap.get("summoner");
    this.txSubmitted = false;
    this.txHash = "";
    this.FACTORY_ADDRESS = "0x5339CA2b8148C5803236D8592a98411c4Ae881f8";

    this.DEFAULT_SHARE_NAME = "Fantastic12 Squad Share";
    this.DEFAULT_SHARE_SYMBOL = "F12-SHARE";
    this.DEFAULT_SHARE_DECIMALS = 18;
    this.DEFAULT_SUMMONER_SHARES = new BigNumber(100 * 1e18);
  }

  ngOnInit() {
    this.connect(
      () => {
        // Initialize factory contract
        const abi = require('../../assets/abis/PaidFantastic12Factory.json');
        const factory = new this.web3.eth.Contract(abi, this.FACTORY_ADDRESS);

        // Call createSquad()
        this.sendTx(factory.methods.createSquad(this.summoner, this.DEFAULT_SHARE_NAME, this.DEFAULT_SHARE_SYMBOL, this.DEFAULT_SHARE_DECIMALS, this.DEFAULT_SUMMONER_SHARES.toFixed()),
          (txHash) => {
            this.txSubmitted = true;
            this.txHash = txHash;
          }, console.log, console.log);
      },
      (e) => {
        // Wallet not connected
        // TODO: notify the user
        console.log(JSON.stringify(e));
      }
    );
  }
}
