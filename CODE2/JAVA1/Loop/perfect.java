package Loop;

import java.util.Scanner;

public class perfect {
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number");

        int n = sc.nextInt();
        int sum = 0;
        int i = 1;

        while (i <= n / 2) {
            if (n % i == 0) {
                sum = sum + i;
                

            } 
            i++;
        }
        
            if (n == sum) {
                System.out.println(n + " is  a perfect number");

            }
            else
            System.out.println(n+ " is not a perfect number");
            
        

    }
}
