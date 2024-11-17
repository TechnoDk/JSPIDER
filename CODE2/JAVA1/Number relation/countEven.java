import java.util.Scanner;

public class countEven {
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your number:");
        int n = sc.nextInt();
        int count = 0;
        while (n > 0) {

            int rem = n % 10;
             if ( rem % 2==0) {
                 count++;
             }
            
            //  System.out.println(rem);

            n = n / 10;
        }
        System.out.println("Total even Digits:- " + count );
    }
}
