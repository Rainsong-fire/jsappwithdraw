import {HttpJsonRpcConnector, LotusClient, LotusWalletProvider } from 'filecoin.js';
import BigNumber from "bignumber.js";

(async () => {

    const connector = new HttpJsonRpcConnector({ url:'http://127.0.0.1:1234/rpc/v1', token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJyZWFkIiwid3JpdGUiLCJzaWduIiwiYWRtaW4iXX0.q8bmFopRibNBkyc_0pI8ze11d9EdDTmyjxwfcbfTFbE' });
    const lotusClient = new LotusClient(connector);
    const walletLotusHttp = new LotusWalletProvider(lotusClient);
    console.log('11111ok');
//above is the head of the code.

//below is the code of creating unsigned message,only from and to is required actually.
//the params inputted is in a form of struct.
    const message = await walletLotusHttp.createMessage({
        From: 't1b3odeaziuhyzrkcewzjr7kpi3uo4b5ruf4juiey',
        To: 't1npbdebqhmt6vo6asvrg64knpxjiftacpv4ccvja',
        Value: new BigNumber(1000000000000000000),
    });
    console.log(message)

    const signedMessage = await walletLotusHttp.signMessage(message)
    console.log(signedMessage)

    await walletLotusHttp.sendSignedMessage(signedMessage)
    console.log('finished');



})().then().catch();