import java.util.Scanner;

public class sumEven {
    
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your number:");
        int n = sc.nextInt();
        int sum = 0;
        while (n > 0) {

            int rem = n % 10;
            sum = sum + rem;
            // System.out.println(rem);

            n = n / 10;
        }
        if (sum % 2 == 0) {
            System.out.println(sum +" is even");
        }
        else
        System.out.println(sum + " is odd");
    }
    
    
     
}