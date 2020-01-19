import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Web3Enabled } from '../web3Enabled';
import Web3 from 'web3';
import { WEB3 } from '../web3';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent extends Web3Enabled implements OnInit {

  salt: number;
  sig: string;

  constructor(@Inject(WEB3) web3: Web3, private route: ActivatedRoute) {
    super(web3);
  }

  ngOnInit() {
    this.connect(
      () => {
        this.route.queryParamMap.subscribe(async params => {
          const orderObj = {...params.keys, ...params};
          if (orderObj['params'].squad && orderObj['params'].selector && orderObj['params'].params && orderObj['params'].salt) {
            const squadAddr = orderObj['params'].squad;
            const funcSig = orderObj['params'].selector;
            let funcParams = orderObj['params'].params;
            if (funcParams.slice(0, 2) !== '0x') {
              funcParams = await this.decompressBase64(funcParams);
            }
            this.salt = orderObj['params'].salt;
    
            // Initialize squad contract
            const abi = require('../../assets/abis/Fantastic12.json');
            const squad = new this.web3.eth.Contract(abi, squadAddr);
    
            // Generate hash to sign
            const hash = await squad.methods.naiveMessageHash(funcSig, funcParams, this.salt).call();
    
            // Sign hash
            this.sig = await this.web3.eth.personal.sign(hash, this.state.address, '');
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
