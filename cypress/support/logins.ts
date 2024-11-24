// eslint-disable-next-line no-shadow
import strings from '../support/strings.json';

enum CredentialComponents {
    VALID_USERNAME = "standard_user",
    LOCKED_USER = "locked_out_user",
    PROBLEM_USER = "problem_user",
    PERF_GLITCH_USER = "performance_glitch_user",
    VALID_PASSWORD = "secret_sauce",
    EMPTY_USERNAME = " ",
    EMPTY_PASSWORD = " "
}

export interface Credential {
    [key: string]: {
        username: string;
        password: string;
    };
}

export interface InvalidCredential {
    [key: string]: {
        username: string;
        password: string;
        errorMessage: string;
    };
}

// eslint-disable-next-line import/prefer-default-export
export const ValidLogins: Credential = {
    STANDARD_USERNAME_AND_PASSWORD: {
        username: CredentialComponents.VALID_USERNAME,
        password: CredentialComponents.VALID_PASSWORD,
    },
};

// eslint-disable-next-line import/prefer-default-export
export const InvalidLogins: InvalidCredential = {
    INVALID_USERNAME_AND_PASSWORD: {
        username: CredentialComponents.EMPTY_USERNAME,
        errorMessage: strings.errors.usernameAndPasswordDontMatch,
        password: CredentialComponents.EMPTY_PASSWORD,
    },
    LOCKED_USERNAME_AND_PASSWORD: {
        username: CredentialComponents.LOCKED_USER,
        errorMessage: strings.errors.userLockedOut,
        password: CredentialComponents.VALID_PASSWORD,
    },
};
