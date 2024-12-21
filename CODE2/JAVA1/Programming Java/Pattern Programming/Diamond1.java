import java.util.Scanner;

class Diamond1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Number of rows: ");
        int n = sc.nextInt();
        printPattern(n);
    }

    public static void printPattern(int n) {
        if (n % 2 == 0) {
            System.out.println("The Row value must be Odd");
            return;
        }
        int mid = n / 2 + 1;
        int star = 1;
        int space = n / 2;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= space; j++)
                System.out.print("  ");
            for (int j = 1; j <= star; j++)
                System.out.print("* ");
            if (i < mid) {
                star += 2;
                space--;
            } else {
                star -= 2;
                space++;
            }
            System.out.println();
        }
    }
}