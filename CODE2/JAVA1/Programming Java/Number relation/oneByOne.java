
// package Number relation;
import java.util.Scanner;

public class oneByOne {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your number:");
        int n = sc.nextInt();
        while (n > 0) {

            int rem = n % 10;
            System.out.println(rem);

            n = n / 10;
        }
    }
}
