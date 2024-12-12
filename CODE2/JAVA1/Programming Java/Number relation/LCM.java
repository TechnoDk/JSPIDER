import java.util.Scanner;

class LCM {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("ENter 1st Number");
        int a = sc.nextInt();
        System.out.println("ENter 2nd Number");
        int b = sc.nextInt();
        System.out.println("ENter 3rd Number");
        int c = sc.nextInt();
        getLCM(a, b, c);
    }

    public static void getLCM(int a, int b, int c) {
        for (int i = 1;; i++) {
            if (i % a == 0 && i % b == 0 && i % c == 0) {
                System.out.println("LCM is: " + i);
                break;
            }
        }
    }
}
