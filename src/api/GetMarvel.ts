import { MD5 } from 'crypto-js';

const privateKey = '3e5bba99148ebf45832762613598769ce5168353';
const publicKey = '5b8182df755b1fcd5b9f36d07fe6f9c4';

const generateHash = ( privateKey: string , publicKey: string , timestamp: any ) => {
    return MD5(`${ timestamp }${ privateKey }${ publicKey }`);
}

export const listCharacters = async () => {
    const timestamp = +new Date();
    const hash = generateHash(privateKey , publicKey , timestamp);
    console.log(hash);
    

    const params = `apikey=${ publicKey }&ts=${ timestamp }&hash=${ hash }`;
    return fetch(`https://gateway.marvel.com/v1/public/characters?${ params }`)
            .then( response => response.json());
};

