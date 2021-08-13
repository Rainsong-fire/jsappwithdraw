import { HttpJsonRpcConnector, LotusClient , LotusWalletProvider} from 'filecoin.js';


(async () => {

    const connector = new HttpJsonRpcConnector({ url:'http://127.0.0.1:1234/rpc/v1', token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJyZWFkIiwid3JpdGUiLCJzaWduIiwiYWRtaW4iXX0.q8bmFopRibNBkyc_0pI8ze11d9EdDTmyjxwfcbfTFbE' });
    const walletProvider = new LotusWalletProvider(connector);

    const myAddress = await walletProvider.getNonce('t1npbdebqhmt6vo6asvrg64knpxjiftacpv4ccvja');
    console.log(myAddress)
})().then(console.log).catch();



