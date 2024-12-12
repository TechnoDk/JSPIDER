// Take Cost price and sell price from user and print profit percent & loss percent.

import java.util.Scanner;

class ProfitOrLoss {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Cost Price: ");
        double cp = sc.nextDouble();
        System.out.println("Enter the Selling Price: ");
        double sp = sc.nextDouble();
        if (sp > cp) {
            System.out.println("There is Profit in the transaction");
            double profit = sp - cp;
            double proPer = (profit * 100) / cp;
            System.out.println("Profit% is: " + proPer + "%");
        } else if (cp > sp) {
            System.out.println("There is Loss in the transaction");
            double loss = cp - sp;
            double lossPer = (loss * 100) / cp;
            System.out.println("Loss% is: " + lossPer + "%");
        } else
            System.out.println("There is No Profit No Loss in the transaction");
        System.out.println("=====Program Ends=====");

    }
}
