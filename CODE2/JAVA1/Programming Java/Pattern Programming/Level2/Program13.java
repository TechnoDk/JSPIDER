
//print n*n matrix
import java.util.Scanner;

class Program13 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Number of rows: ");
        int n = sc.nextInt();
        printPattern(n);
    }

    public static void printPattern(int n) {
        int star = n;
        int mid = n / 2 + 1;
        int space = 0;
        for (int i = 1; i <= n; i++) {

            for (int j = 1; j <= space; j++) {
                System.out.print("  ");
            }
            for (int j = 1; j <= star; j++) {
                System.out.print("* ");
            }
            if (i < mid) {
                star -=2;
                space++;

            } else {
                star+=2;
                space--;

            }

            System.out.println();
        }
    }
}