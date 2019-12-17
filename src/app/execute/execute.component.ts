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

  constructor(@Inject(WEB3) web3: Web3, private route: ActivatedRoute) {
    super(web3);
  }

  ngOnInit() {
    this.connect(
      () => {
        this.route.queryParamMap.subscribe(async params => {
          const orderObj = {...params.keys, ...params};
          if (orderObj['params'].tx) {
            const tx = JSON.parse(orderObj['params'].tx);
            
            this.web3.eth.sendTransaction(tx);
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
