//this is the code for get pendings of the msig
import {HttpJsonRpcConnector, LotusClient, LotusWalletProvider } from 'filecoin.js';
import BigNumber from "bignumber.js";


(async () => {

    const connector = new HttpJsonRpcConnector({ url:'http://127.0.0.1:1234/rpc/v1', token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJyZWFkIiwid3JpdGUiLCJzaWduIiwiYWRtaW4iXX0.q8bmFopRibNBkyc_0pI8ze11d9EdDTmyjxwfcbfTFbE' });
    const lotusClient = new LotusClient(connector);
    const walletLotusHttp = new LotusWalletProvider(lotusClient);
    console.log('11111ok');


    const defaultAccount = await walletLotusHttp.getDefaultAddress();
    console.log(defaultAccount)

    const message = await walletLotusHttp.createMessage({
        From: 't3urcbhpqvpuscjgwn4xzitqkiti5xslcbmxawbbwidynvwco7yhsl6vmo7hashrchw4ugeob7uygsv67cspma',
        To: 't012289',
        Value: new BigNumber(0),
        Method:2,
        Params:  'hFUBDtwyAyih8ZioRLZTH6no3R3A9jRJAA3gtrOnZAAAAEA='
    });


    const signedMessage = await walletLotusHttp.signMessage(message)
    await walletLotusHttp.sendSignedMessage(signedMessage)
    console.log(signedMessage)
    console.log('finished');

})().then().catch();
