import {HttpJsonRpcConnector, LotusClient, LotusWalletProvider} from 'filecoin.js';


(async () => {
    let addr = 't1npbdebqhmt6vo6asvrg64knpxjiftacpv4ccvja'
    const connector = new HttpJsonRpcConnector({ url:'http://127.0.0.1:1234/rpc/v1', token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJyZWFkIiwid3JpdGUiLCJzaWduIiwiYWRtaW4iXX0.q8bmFopRibNBkyc_0pI8ze11d9EdDTmyjxwfcbfTFbE' });
    const walletProvider = new LotusWalletProvider(connector);
    const nonce = await walletProvider.getNonce(addr);
    console.log(nonce)
})().then(console.log).catch();