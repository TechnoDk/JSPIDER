package Task;

import java.util.Scanner;

public class Pattern2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Number of rows: ");
        int n = sc.nextInt();
        printPattern(n);
    }

    public static void printPattern(int n) {
        if (n % 2 == 0) {
            System.out.println("The Row must be Odd!!");
            return;
        }
        int mid = n / 2 + 1;
        int sSpace = n / 2;
        int mSStar = n + 2;
        int mEStar = 2 * n - 1;
        int eStar = 1;
        int space = n/2;
        int star = 1;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= space; j++)
                System.out.print("  ");
            for (int j = 1; j <= star; j++)
                System.out.print("* ");

             
            for (int j = mid+1; j <=  n-1; j++) {// Section3
                if (i >= mid+1 || j > mSStar || j < mEStar)
                    System.out.print("@ ");
                else
                    System.out.print("  ");
            }
             
            for (int j = 1; j <= eStar; j++) {// Section5
                System.out.print("* ");
            }
            if (i < mid) {
                sSpace--;
                eStar++;
                star += 2;
                space--;
            } else {
                sSpace++;
                eStar--;
                star -= 2;
                space++;
            }
            if (i > mid) {
                mSStar++;
                mEStar--;
            }
            System.out.println();
        }
    }
}
