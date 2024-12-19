
//print n*n matrix
import java.util.Scanner;

class ProgramEnd {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Number of rows: ");
        int n = sc.nextInt();
        printPattern(n);
    }

    public static void printPattern(int n) {
        if (n % 2 == 0) {
            System.out.println("The Row must be odd!");
            return;
        }
        
        int mid = n / 2 + 1;
        int sSpace = n / 2;
    
        for (int i = 1; i <= n; i++) {

            for (int j = 1; j <= mid; j++)
                if (j <= sSpace) {
                    System.out.print("  ");

                }
                else {
                System.out.print("* ");
               }
            if (i < mid) {
            
                sSpace--;
            } else {
                sSpace++;
            }
            System.out.println();
        }
    }
}