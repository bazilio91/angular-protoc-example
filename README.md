# AngularProtocExample

Example usage of https://github.com/reviz0r/jsonrpc-gateway server 
and client generated with https://github.com/bazilio91/angular-jrpc-proto-gen

Please clone jsonrpc-gateway and do `go get $(go list .)` to run example backend. 

Run backend:
```bash
git submodule init --update
yarn install
yarn proto
yarn backend
```

Run angular:
```bash
yarn start
```
