import { AuthClient } from "@dfinity/auth-client";
import { HttpAgent } from "@dfinity/agent";

export const initAuth = async () => {
  const authClient = await AuthClient.create();
  if (await authClient.isAuthenticated()) {
    return authClient;
  }
  return null;
};

export const login = async () => {
  const authClient = await AuthClient.create();
  await authClient.login({
    identityProvider: `http://${process.env.CANISTER_ID_INTERNET_IDENTITY}.localhost:4943/` || "https://identity.ic0.app",
    onSuccess: () => {
      window.location.reload();
    },
  });
};

export const logout = async () => {
  const authClient = await AuthClient.create();
  await authClient.logout();
  window.location.reload();
};

export const getAuthenticatedAgent = async () => {
  const authClient = await AuthClient.create();
  if (await authClient.isAuthenticated()) {
    return new HttpAgent({
      identity: authClient.getIdentity(),
    });
  }
  return null;
};