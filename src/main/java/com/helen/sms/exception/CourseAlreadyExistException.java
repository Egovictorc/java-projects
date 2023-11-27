package com.helen.sms.exception;

/**
 *
 */
public class CourseAlreadyExistException extends RuntimeException{
    public CourseAlreadyExistException() {
        super();
    }

    public CourseAlreadyExistException(String message) {
        super(message);
    }

    public CourseAlreadyExistException(String message, Throwable cause) {
        super(message, cause);
    }

    public CourseAlreadyExistException(Throwable cause) {
        super(cause);
    }

    public CourseAlreadyExistException(String message, Throwable cause,
                                       boolean enableSuppression,
                                       boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}
