import { MD5 } from 'crypto-js';

const privateKey = '3e5bba99148ebf45832762613598769ce5168353';
const publicKey = '5b8182df755b1fcd5b9f36d07fe6f9c4';

const generateParams = ( privateKey: string , publicKey: string) => {
    const timestamp = +new Date();
    const hash = MD5(`${ timestamp }${ privateKey }${ publicKey }`);
    return `apikey=${ publicKey }&ts=${ timestamp }&hash=${ hash }`;
}

export const listCharacters = async () => {
    const params = generateParams(privateKey , publicKey);
    return fetch(`https://gateway.marvel.com/v1/public/characters?${ params }`)
            .then( response => response.json());
};

export const listComics = async (url: string) => {
    const params = generateParams(privateKey , publicKey);
    return fetch(`${url}?${ params }`)
    .then( response => response.json());
}