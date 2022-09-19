#!/bin/bash
CONTRACT_ACCOUNT_ID='three_d_turtle.groked.testnet'
DEP_ACCOUNT='groked.testnet'
TREASURY_ID='groked.testnet'
# 6 Near
MINT_PRICE=6000000000000000000000000
BASE_URL='https://3d-turtle.netlify.app/#'
# 150 TGas
INIT_GAS=150000000000000
# 0.5 Near
INIT_DEP=0.5

# 100,000 for testnet
MAX_SUPPLY=100000

INIT_ARGS="{\"owner_id\": \"$CONTRACT_ACCOUNT_ID\", \"treasury_id\": \"$TREASURY_ID\", \"mint_price\": \"$MINT_PRICE\", \"max_supply\": $MAX_SUPPLY, \"base_url\": \"$BASE_URL\"}"

echo "Init args of $INIT_ARGS"

# Run from root of folder
./scripts/build.sh && \
near deploy $CONTRACT_ACCOUNT_ID ./res/non_fungible_token.wasm new_default_only_meta "$INIT_ARGS" "$INIT_GAS" "$INIT_DEP"
