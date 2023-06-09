/**
 * List of authentication service database tables.
 */
export declare enum AuthDbTables {
    USERS = "authUser",
    TOKENS = "authToken",
    ROLES = "authRole",
    USER_ROLES = "authUserRole",
    ROLE_PERMISSIONS = "authRolePermission"
}
/**
 * Permission types definitions.
 */
export declare enum PermissionType {
    READ = "read",
    WRITE = "write",
    EXECUTE = "execute"
}
/**
 * Permissions levels definitions.
 */
export declare enum PermissionLevel {
    NONE = 0,
    OWN = 1,
    ALL = 2
}
/**
 * Auth validator Error codes - 100_422000.
 */
export declare enum AuthValidatorErrorCode {
    DEFAULT_VALIDATION_ERROR = 100422000,
    USER_EMAIL_NOT_PRESENT = 100422001,
    USER_EMAIL_NOT_VALID = 100422002,
    USER_EMAIL_ALREADY_TAKEN = 100422003,
    USER_PASSWORD_NOT_PRESENT = 100422004,
    USER_PASSWORD_NOT_VALID = 100422005,
    USER_ID_NOT_PRESENT = 100422006,
    USER_ID_ALREADY_TAKEN = 100422007,
    USER_USERNAME_NOT_PRESENT = 100422008,
    USER_USERNAME_NOT_VALID = 100422009,
    USER_USERNAME_ALREADY_TAKEN = 100422010,
    ROLE_PERMISSION_ROLE_ID_NOT_PRESENT = 100422011,
    ROLE_PERMISSION_PERMISSION_ID_NOT_PRESENT = 100422012,
    ROLE_PERMISSION_READ_LEVEL_NOT_SET = 100422013,
    ROLE_PERMISSION_WRITE_LEVEL_NOT_SET = 100422014,
    ROLE_PERMISSION_EXECUTE_LEVEL_NOT_SET = 100422015,
    ROLE_PERMISSION_NAME_NOT_PRESENT = 100422016,
    ROLE_NAME_NOT_PRESENT = 100422017,
    ROLE_NAME_ALREADY_TAKEN = 100422018,
    USER_PIN_NOT_CORRECT_LENGTH = 100422019,
    USER_PIN_ALREADY_TAKEN = 100422020,
    ROLE_PERMISSION_READ_LEVEL_NOT_VALID = 100422021,
    ROLE_PERMISSION_WRITE_LEVEL_NOT_VALID = 100422022,
    ROLE_PERMISSION_EXECUTE_LEVEL_NOT_VALID = 100422023
}
/**
 * Bad request error codes - 100_400000.
 */
export declare enum AuthBadRequestErrorCode {
    DEFAULT_BAD_REQUEST_ERROR = 100400000,
    MISSING_DATA_ERROR = 100400001,
    ROLE_PERMISSION_ALREADY_EXISTS = 100400002,
    AUTH_USER_ROLE_ALREADY_EXISTS = 100400003,
    AUTH_USER_ROLE_DOES_NOT_EXISTS = 100400004
}
/**
 * System error codes - 500000.
 */
export declare enum AuthSystemErrorCode {
    DEFAULT_SYSTEM_ERROR = 100500000,
    UNHANDLED_SYSTEM_ERROR = 100500001,
    SQL_SYSTEM_ERROR = 100500002
}
/**
 * Resource not found error codes - 404000.
 */
export declare enum AuthResourceNotFoundErrorCode {
    DEFAULT_RESOURCE_NOT_FOUND_ERROR = 100404000,
    AUTH_USER_DOES_NOT_EXISTS = 100404001,
    ROLE_DOES_NOT_EXISTS = 100404002,
    ROLE_PERMISSION_DOES_NOT_EXISTS = 100404003
}
/**
 * Authentication error codes - 401000.
 */
export declare enum AuthAuthenticationErrorCode {
    MISSING_AUTHENTICATION_TOKEN = 100401001,
    INVALID_TOKEN = 100401002,
    USER_NOT_AUTHENTICATED = 100401003
}
/**
 * Authentication JWT token types definitions.
 */
export declare enum AuthJwtTokenType {
    USER_AUTHENTICATION = "USER_AUTHENTICATION",
    USER_SIGN_UP = "USER_SIGN_UP",
    USER_RESET_EMAIL = "USER_RESET_EMAIL",
    USER_RESET_USERNAME = "USER_RESET_USERNAME",
    USER_RESET_PASSWORD = "USER_RESET_PASSWORD",
    USER_LOGIN_MAGIC = "USER_LOGIN_MAGIC"
}
export declare const AuthServiceErrorPrefix = 100;
//# sourceMappingURL=types.d.ts.map