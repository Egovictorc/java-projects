package com.helen.sms.exception;

/**
 *
 */
public class StaffAlreadyExistException extends RuntimeException{
    public StaffAlreadyExistException() {
        super();
    }

    public StaffAlreadyExistException(String message) {
        super(message);
    }

    public StaffAlreadyExistException(String message, Throwable cause) {
        super(message, cause);
    }

    public StaffAlreadyExistException(Throwable cause) {
        super(cause);
    }

    public StaffAlreadyExistException(String message, Throwable cause,
                                      boolean enableSuppression,
                                      boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}
