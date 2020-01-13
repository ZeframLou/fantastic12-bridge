import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Web3Enabled } from '../web3Enabled';
import Web3 from 'web3';
import { WEB3 } from '../web3';

@Component({
  selector: 'app-execute',
  templateUrl: './execute.component.html',
  styleUrls: ['./execute.component.css']
})
export class ExecuteComponent extends Web3Enabled implements OnInit {
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
          if (orderObj['params'].squad && orderObj['params'].data) {
            const squad = orderObj['params'].squad;
            const data = orderObj['params'].data;

            this.web3.eth.sendTransaction({
              from: this.state.address,
              to: squad,
              data: data
            }).on('transactionHash', (hash) => {
              this.txSubmitted = true;
              this.txHash = hash;
              this.notifyInstance.hash(hash);
            });
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
