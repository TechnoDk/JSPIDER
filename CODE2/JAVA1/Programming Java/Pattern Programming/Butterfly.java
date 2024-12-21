import java.util.Scanner;

class Butterfly {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("ENter the Number of rows: ");
        int n = sc.nextInt();
        printPattern(n);
    }

    public static void printPattern(int n) {
        if (n % 2 == 0) {
            System.out.println("The Row value must be Odd");
            return;
        }
        int mid = n / 2 + 1;
        int sStar = 1;
        int eStar = n;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (j <= sStar || j >= eStar)
                    System.out.print("* ");
                else
                    System.out.print("  ");
            }
            if (i < mid) {
                sStar++;
                eStar--;
            } else {
                sStar--;
                eStar++;
            }
            System.out.println();
        }
    }
}