export const createPasskey = async (name: string, email: string) => {
  try {
    const publicKeyCredentialCreationOptions: PublicKeyCredentialCreationOptions =
      {
        challenge: new Uint8Array(32),
        rp: {
          name: "Passkey Demo",
          id: window.location.hostname,
        },
        user: {
          id: new Uint8Array(16),
          name: name,
          displayName: email,
        },
        pubKeyCredParams: [
          { alg: -7, type: "public-key" }, // ES256
          { alg: -257, type: "public-key" }, // RS256
        ],
        authenticatorSelection: {
          authenticatorAttachment: "platform" as AuthenticatorAttachment,
          userVerification: "required" as UserVerificationRequirement,
        },
        timeout: 60000,
        attestation: "direct" as AttestationConveyancePreference,
      };

    const credential = await navigator.credentials.create({
      publicKey: publicKeyCredentialCreationOptions,
    });

    if (credential) {
      console.log("Passkey created successfully!");
    }
  } catch (error) {
    console.error("Error creating passkey:", error);
  }
};
export const loginWithPasskey = async () => {
  try {
    const publicKeyCredentialRequestOptions: PublicKeyCredentialRequestOptions =
      {
        challenge: new Uint8Array(32),
        allowCredentials: [],
        timeout: 60000,
        userVerification: "required" as UserVerificationRequirement,
      };

    const assertion = await navigator.credentials.get({
      publicKey: publicKeyCredentialRequestOptions,
    });

    if (assertion) {
    }
  } catch (error) {}
};
