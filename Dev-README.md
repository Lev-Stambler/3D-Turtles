# Useful deploy commands

```
	./build.sh && \
	near dev-deploy ./res/non_fungible_token.wasm --accountId 'levtester.testnet' && \
	source neardev/dev-account.env && \
	echo "Deployed to $CONTRACT_NAME" && \
	near call $CONTRACT_NAME new_default_meta "" --accountId 'levtester.testnet'
```
