package Loop;

import java.util.Scanner;

public class fibbonaci {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number");
        int n = sc.nextInt();
        int a = 0;
        int b = 1;
        int i = 0;
        System.out.print("Fibonacci Sequence :- ");

        while (i < n) {
            System.out.print(a + " ");
            int sum = a + b;
            a = b;
            b = sum;

            i++;
        }

    }
}
