import {HttpJsonRpcConnector, LotusClient, LotusWalletProvider} from 'filecoin.js';


(async () => {
    let addr;
    const connector = new HttpJsonRpcConnector({ url:'http://127.0.0.1:1234/rpc/v1', token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJyZWFkIiwid3JpdGUiLCJzaWduIiwiYWRtaW4iXX0.q8bmFopRibNBkyc_0pI8ze11d9EdDTmyjxwfcbfTFbE' });
    const lotusClient = new LotusClient(connector);
    const walletLotusHttp = await LotusWalletProvider(lotusClient);
    console.log('11111ok');

    console.log(nonce);

})().then().catch();