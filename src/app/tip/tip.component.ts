import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Web3Enabled } from '../web3Enabled';
import Web3 from 'web3';
import { WEB3 } from '../web3';
import BigNumber from 'bignumber.js';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})
export class TipComponent extends Web3Enabled implements OnInit {
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
          if (orderObj['params'].dest && orderObj['params'].amount && orderObj['params'].token) {
            const dest = orderObj['params'].dest;
            let amount = orderObj['params'].amount;
            const token = orderObj['params'].token;
            const ZERO_ADDR = '0x0000000000000000000000000000000000000000';

            if (token === ZERO_ADDR) {
              // Ether
              amount = new BigNumber(amount).times(1e18).integerValue().toFixed();
              this.web3.eth.sendTransaction({
                from: this.state.address,
                to: dest,
                value: amount
              }).on('transactionHash', (hash) => {
                this.txSubmitted = true;
                this.txHash = hash;
                this.notifyInstance.hash(hash);
              });
            } else {
              // ERC20 token
              const abi = require('../../assets/abis/ERC20.json');
              const contract = new this.web3.eth.Contract(abi, token);
              const decimals = +await contract.methods.decimals().call();
              amount = new BigNumber(amount).times(Math.pow(10, decimals)).integerValue().toFixed();
              this.sendTx(contract.methods.transfer(dest, amount), (hash) => {
                this.txSubmitted = true;
                this.txHash = hash;
                this.notifyInstance.hash(hash);
              }, console.log, console.log);
            }
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
