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
          if (orderObj['params'].squad && orderObj['params'].func && orderObj['params'].args) {
            const squadAddr = orderObj['params'].squad;
            const func = orderObj['params'].func;
            const args = JSON.parse(orderObj['params'].args);

            // Initialize squad contract
            const abi = require('../../assets/abis/Fantastic12.json');
            const squad = new this.web3.eth.Contract(abi, squadAddr);

            this.sendTx(squad.methods[func].apply(null, args), console.log, console.log, console.log);
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
