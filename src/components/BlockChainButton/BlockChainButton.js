import React, {useEffect, useState} from 'react';
import {useConnectModal, useSignMessage, Web3Modal, useAccount, useDisconnect} from "@web3modal/react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
} from "react-router-dom";
import {ethers} from "ethers";

    const verifyMessage = async ({ message, address, signature }) => {
        try {
            const signerAddr = ethers.utils.verifyMessage(message, signature);
            if (signerAddr !== address) {
                return false;
            }

            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    };
function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}
function BlockChainButton(props) {
    const { isOpen, open, close } = useConnectModal();
    const [connected, setConnected] = useState('Connect to blockchain');
    const [signedMessage, setSignedMessage] = useState('');
    const disconnect = useDisconnect();
    const { account, isReady } = useAccount();
    let query = useQuery();
    const { data, error, isLoading, signMessage } = useSignMessage({
        message: query.get('tg')
    });

    useEffect(() => {

    })
    return (
        <>
            <button className={`rounded-[5px] max-lg:mb-8
             mt-12 py-1 text-2xl bg-sky-600
             opacity-50 text-white 
             ${!isOpen ? 'cursor-default' :'cursor-not-allowed'}
             ${account.isConnected ?  'hidden' : 'block'}
            `} onClick={open}>{connected}</button>
            <button className={`rounded-[5px] max-lg:mb-8
             mt-12 py-1 text-2xl bg-sky-600
             opacity-50 text-white 
             ${!isOpen ? 'cursor-default' :'cursor-not-allowed'}
              ${account.isConnected ?  'block' : 'hidden'}
             `} onClick={() => {
                 disconnect();
                 setConnected('Connect to blockchain')
            }}>Close connection</button>
            <button className={`rounded-[5px] max-lg:mb-8
             mt-12 py-1 text-2xl bg-sky-600
             opacity-50 text-white 
             ${!isOpen ? 'cursor-default' :'cursor-not-allowed'}
              ${account.isConnected ?  'block' : 'hidden'}
             `} onClick={async () => {
                signMessage().then((data) => {
                    setSignedMessage(data);
                });
            }}>Sign Message</button>
            <button className={`rounded-[5px] max-lg:mb-8
             mt-12 py-1 text-2xl bg-sky-600
             opacity-50 text-white 
             ${!isOpen ? 'cursor-default' :'cursor-not-allowed'}
              ${account.isConnected ?  'block' : 'hidden'}
             `} onClick={async () => {
                verifyMessage({message: query.get('tg'),signature: signedMessage,address: account.address}).then((data) => {
                    console.log(data);
                });
            }}>verify</button>
        </>
    );
}

export default BlockChainButton;