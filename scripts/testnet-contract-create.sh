#!/bin/sh
CONTRACT_ACCOUNT_ID='three_d_turtle.groked.testnet'
DEP_ACCOUNT='groked.testnet'

near create-account "$CONTRACT_ACCOUNT_ID" --masterAccount "$DEP_ACCOUNT"