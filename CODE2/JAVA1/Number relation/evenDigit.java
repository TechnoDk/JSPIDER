import java.util.Scanner;

public class evenDigit{

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your number:");
        int n = sc.nextInt();
        while (n > 0) {

            int rem = n % 10;
            if ( rem%2==0) {
                System.out.println(rem);
            }
            // System.out.println(rem);

            n = n / 10;
        }
    }
}
