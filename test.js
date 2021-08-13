import { HttpJsonRpcConnector, LotusClient } from 'filecoin.js';

(async () => {

    const connector = new HttpJsonRpcConnector({ url:'http://127.0.0.1:1234/rpc/v1', token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJyZWFkIiwid3JpdGUiLCJzaWduIiwiYWRtaW4iXX0.q8bmFopRibNBkyc_0pI8ze11d9EdDTmyjxwfcbfTFbE' });
    const jsonRpcProvider = new LotusClient(httpConnector);
    const version = await jsonRpcProvider.common.version();
    console.log(version);

})().then().catch();