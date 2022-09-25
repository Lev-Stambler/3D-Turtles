#!/bin/sh
CONTRACT_ACCOUNT_ID='three_d_turtle.neontetra.near'
DEP_ACCOUNT='neontetra.near'

NEAR_ENV=mainnet near create-account "$CONTRACT_ACCOUNT_ID" --masterAccount "$DEP_ACCOUNT"