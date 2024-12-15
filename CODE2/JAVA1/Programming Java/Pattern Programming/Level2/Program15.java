
//print n*n matrix
import java.util.Scanner;

class Program15 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Number of rows: ");
        int n = sc.nextInt();
        printPattern(n);
    }

    public static void printPattern(int n) {
        int sStar = 1;
        int mid = n / 2 + 1;
        int eStar = n;
        for (int i = 1; i <= n; i++) {

            for (int j = 1; j <= n; j++) {
                if (j <= sStar || j >= eStar) {
                    System.out.print("* ");

                }
                else {
                System.out.print("  ");
              }
            }
            
            if (i < mid) {
                eStar --;
                sStar++;

            } else {
                sStar --;
                eStar++;

            }

            System.out.println();
        }
    }
}