import IdentityLocation from './IdentityLocation';

export default interface IdentityFetcher {
    fetchIdentities(location: IdentityLocation): Map<string, string>;
}