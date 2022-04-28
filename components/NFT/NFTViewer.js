import React from 'react'
import { Asset, CenterProvider } from 'nft-react'

const address = '0x79FCDEF22feeD20eDDacbB2587640e45491b757f'

export default function NFTViewer() {
    const [tokenId, setTokenId] = React.useState('42')
    return (
        <CenterProvider>
            <input
                type="text"
                value={tokenId}
                onChange={(e) => setTokenId(e.target.value)}
            />
            <Asset
                network="ethereum-mainnet"
                address={"0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7"}
                tokenId={8752}
                preset={'large'}
            />
        </CenterProvider>
    )
}