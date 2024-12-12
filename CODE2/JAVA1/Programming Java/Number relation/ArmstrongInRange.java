import java.util.Scanner;

class ArmstrongInRange {
    public static void main(String[] args) {
        int count = 0;
        for (int i = 1; i <= 10000; i++) {
            if (isArmstrong(i)) {
                System.out.print(i + " ");
                count++;
            }
        }
        System.out.print("\nTotal Such Numbers are: " + count);
    }

    public static boolean isArmstrong(int n) {
        int originalNum = n;
        int count = getCount(n);
        int sum = 0;
        while (n > 0) {
            int rem = n % 10;
            sum = sum + getPower(rem, count);
            n = n / 10;
        }
        return sum == originalNum;
    }

    public static int getCount(int n) {
        int count = 0;
        while (n > 0) {
            count++;
            n = n / 10;
        }
        return count;
    }

    public static int getPower(int a, int b) {
        int pow = 1;
        for (int i = 1; i <= b; i++) {
            pow = pow * a;
        }
        return pow;
    }

}