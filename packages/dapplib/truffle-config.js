require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remember universe install clock office twist'; 
let testAccounts = [
"0x2fa376f6c61349e1af16a9deb34ef253409d34c0bef6f4b86b4da76bf8a690db",
"0x16b5c9a62b6b56a8c0a337758de7ad16f38aad59fdc3fdc83f6c352c30590928",
"0x4301abc167bce20476329aedff670f4c89ead85c1aa03c6a37c6fe26e9929056",
"0xfed82fc616f3f9a3cf1b0b4a7feb5cef6655b2e2b0d3a996616af8f1665dc6fc",
"0x84810f1983f54a7b5a683655b0dbdd96a0cab736e2fa86aa9bdc7262cf0864e9",
"0x46deb606e1070e98984ef562c566b89d1f1e2d05e2f976e2f50f3159de0ecc7d",
"0x4088b43ee7758f54fa46114a33c2f0034c4d3b5f51d26e5075c5153379cdc042",
"0x279668d7294414e18eae88c0cbd44417bf405d3d9a351711c522411545925ccf",
"0x68417d634d0b30f6ad8bca1db440cd93b0404aec60ceab04d45cda602916ee4a",
"0x63ba3458cdf0203a849dbee17d3ce889b627a17bc86cec983694cd1c26a2cb37"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
