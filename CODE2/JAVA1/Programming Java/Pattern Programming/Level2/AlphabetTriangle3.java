import java.util.Scanner;

class AlphabetTriangle3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Number of rows: ");
        int n = sc.nextInt();
        printPattern(n);
    }

    public static void printPattern(int n) {
        int star = 1;
        int space = n - 1;
        for (int i = 1; i <= n; i++) {
            int x = 65;
            for (int j = 1; j <= space; j++)
                System.out.print("  ");
            for (int j = 1; j <= star; j++) {
                System.out.print((char) x + " ");
                x++;
            }
            star++;
            space--;
            System.out.println();
        }
    }
}