import java.util.Scanner;

public class reverse {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int rev=0;

        while (n > 0) {
            int rem = n % 10;
            rev = 10 * rev + rem;

            n = n / 10;

        }
        System.out.println("Reverse is " + rev);
    }
}
