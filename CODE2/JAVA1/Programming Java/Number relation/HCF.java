import java.util.Scanner;

class HCF {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("ENter 1st Number");
        int a = sc.nextInt();
        System.out.println("ENter 2nd Number");
        int b = sc.nextInt();
        int hcf = getHCF(a, b);
        System.out.println("Hcf is: " + hcf);
    }

    public static int getHCF(int a, int b) {
        int small = (a < b) ? a : b;
        for (int i = small;; i--) {
            if (a % i == 0 && b % i == 0) {
                return i;
            }
        }
    }
}