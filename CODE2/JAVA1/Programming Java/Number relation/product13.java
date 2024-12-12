import java.util.Scanner;

public class product13 {
    

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your number:");
        int product = 1;
        int n = sc.nextInt();

        while (n > 0) {

            int rem = n % 10;
            // System.out.println(rem);
            if (rem != 0) {
                product = product * rem;

            }

            n = n / 10;
        }
        System.out.println(product +"  is product ");
    }
}
