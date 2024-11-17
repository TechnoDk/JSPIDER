import java.util.Scanner;

public class evenSum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your number:");
        int n = sc.nextInt();
        int sum= 0;
        while (n > 0) {
            
            int rem = n % 10;
            if (rem %2 ==0) {
                sum = sum + rem;
            }
            
            n = n / 10;
        }
        System.out.println("All Even  Digits Sum:- " + sum );
    }
    
}
