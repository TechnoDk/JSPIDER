import java.util.Scanner;

public class biggest{

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your number:");
        int n = sc.nextInt();
        int big = 0;
        while (n > 0) {

            int rem = n % 10;
            if (rem > big) {
                big = rem;

            }
            System.out.println(rem);

            n = n / 10;
        }
        System.out.println(big+" biggest num");
    }
}
