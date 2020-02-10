import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Web3Enabled } from '../web3Enabled';
import Web3 from 'web3';
import { WEB3 } from '../web3';
import BigNumber from 'bignumber.js';

@Component({
  selector: 'app-approve-token',
  templateUrl: './approve-token.component.html',
  styleUrls: ['./approve-token.component.css']
})
export class ApproveTokenComponent extends Web3Enabled implements OnInit {
  txSubmitted: boolean;
  txHash: string;

  constructor(@Inject(WEB3) web3: Web3, private route: ActivatedRoute) {
    super(web3);

    this.txSubmitted = false;
    this.txHash = "";
  }

  ngOnInit() {
    this.connect(
      () => {
        this.route.queryParamMap.subscribe(async params => {
          const orderObj = { ...params.keys, ...params };
          if (orderObj['params'].dest && orderObj['params'].amount) {
            const dest = orderObj['params'].dest;
            let amount = orderObj['params'].amount;
            const abi = require('../../assets/abis/ERC20.json');
            const contract = new this.web3.eth.Contract(abi, this.DAI_ADDR);
            amount = new BigNumber(amount).times(1e18).integerValue().toFixed();
            this.sendTx(contract.methods.approve(dest, amount), (hash) => {
              this.txSubmitted = true;
              this.txHash = hash;
              this.notifyInstance.hash(hash);
            }, console.log, console.log);
          }
        });
      },
      (e) => {
        // error with web3 connection
        console.log(JSON.stringify(e));
      }
    );
  }
}
