import java.util.Scanner;

public class greater5Sum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your number:");
        int n = sc.nextInt();
        int sum= 0;
        while (n > 0) {
            
            int rem = n % 10;
            if (rem >=5) {
                sum = sum + rem;
            }
            
            n = n / 10;
        }
        System.out.println("All   Digits >than 5  Sum:- " + sum );
    }
    
}
