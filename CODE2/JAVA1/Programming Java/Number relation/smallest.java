import java.util.Scanner;

public class smallest {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your number:");
        int n = sc.nextInt();
        int big = 0;
        int small = 9;
        while (n > 0) {

            int rem = n % 10;
            if (rem > big) {
                big = rem;

            }
            if (rem < small) {
                small = rem;

            }
            // System.out.println(rem);

            n = n / 10;
        }
        System.out.println(big - small + " the difference both number ");
    }
}
