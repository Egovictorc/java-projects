package com.helen.sms;

public class DeleteMe {
    public static void main(String[] args) {
        Food fd = new Food("Beans", 50000);
        System.out.println("fd "+ fd);


    }

    String displayUserForLoan(Loan loan) {

        return switch (loan) {
            //case UnsecuredLoan usl -> "Ooooooh that "+ usl.interest() + "% look's like its going to hurt";
            case UnsecuredLoan(var interest) -> "Ooooooh that "+ interest + "% look's like its going to hurt";
            case SecuredLoan securedLoan -> "hey! good job well down";
        };
        /**
         * if (loan instanceof SecuredLoan sl) {
         *             return "hey! Good job! well down";
         *         }
         *
         *         if(loan instanceof UnsecuredLoan usl) {
         *             return "Ooooh! that "+ usl.interest() + "% interest  looks like its going to hurt";
         *         }
         */
        //return null;
    }
}


record Food(String name, double price) {

}


sealed interface Loan permits SecuredLoan, UnsecuredLoan {

}

final class SecuredLoan implements Loan {

}

record UnsecuredLoan(float interest) implements Loan {

}