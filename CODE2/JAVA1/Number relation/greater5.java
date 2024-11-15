import java.util.Scanner;

public class greater5 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your number:");
        int n = sc.nextInt();
        while (n > 0) {

            int rem = n % 10;
            if ( rem>=5) {
                System.out.println(rem);
            }
            // System.out.println(rem);

            n = n / 10;

        }
    }
}
