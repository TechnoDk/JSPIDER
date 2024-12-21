import java.util.Scanner;

class Triangle1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Number of rows: ");
        int n = sc.nextInt();
        printPattern(n);
    }

    public static void printPattern(int n) {
        int star = 1;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= star; j++)
                System.out.print("* ");
            star++;
            System.out.println();
        }
    }
}