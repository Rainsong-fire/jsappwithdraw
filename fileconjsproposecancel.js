import {HttpJsonRpcConnector, LotusClient, LotusWalletProvider } from 'filecoin.js';
import BigNumber from "bignumber.js";

(async () => {

    const connector = new HttpJsonRpcConnector({ url:'http://127.0.0.1:1234/rpc/v1', token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJyZWFkIiwid3JpdGUiLCJzaWduIiwiYWRtaW4iXX0.q8bmFopRibNBkyc_0pI8ze11d9EdDTmyjxwfcbfTFbE' });
    const lotusClient = new LotusClient(connector);
    const walletLotusHttp = new LotusWalletProvider(lotusClient);
    console.log('11111ok');
//above is the head of the code.

//below is the code of creating unsigned message,only from and to is required actually.
//the params inputted is in a form of struct
    const defaultAccount = await walletLotusHttp.getDefaultAddress();
    console.log(defaultAccount)

// in the message, the from should be default account , otherwise it cant be signed. this is a defect of filecoinjs

    const message = await walletLotusHttp.createMessage({
        From: 'f3urcbhpqvpuscjgwn4xzitqkiti5xslcbmxawbbwidynvwco7yhsl6vmo7hashrchw4ugeob7uygsv67cspma',
        To: 't012289',
        Value: new BigNumber(0),
        Method:4,
        Params:'ghgaQA=='
});
//hEMArE1AEEuBSQAbwW1nTsgAAA== 2
    //hEMArE1AEEuBSQCKxyMEiegAAA== 10
    const signedMessage = await walletLotusHttp.signMessage(message)
    await walletLotusHttp.sendSignedMessage(signedMessage)
    console.log(signedMessage)
    console.log('finished');

})().then().catch();

//
//这是message 的params
//        hEMAgWBABVg1glgxA6REE74VfSQkms3l8onBSJo7eSxBZcFghsgeG1sJ38Hkv1WO+cEjxEe3KGI4P6YNKvQ=
//这是propose 中的第二层的params
//                    glgxA6REE74VfSQkms3l8onBSJo7eSxBZcFghsgeG1sJ38Hkv1WO+cEjxEe3KGI4P6YNKvQ=
//  这是message层的params：
//                        "hEMArE1AEEyBSgABoFVpDZ24AAA="
//                                    gUoAAaBVaQ2duAAA




//{"Method": 2,"Params": null,"To": "t09900","Value": "0"}
//hEMArE1AAkA=
