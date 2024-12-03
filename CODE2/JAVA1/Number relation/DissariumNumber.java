import java.util.Scanner;

class DissariumNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("ENter the Number");
        int n = sc.nextInt();// 153
        if (isDissarium(n))
            System.out.println(n + " is a Dissarium Number");
        else
            System.out.println(n + " is NOT a Dissarium Number");

    }

    public static boolean isDissarium(int n) {
        int originalNum = n;
        int count = getCount(n);
        int sum = 0;
        while (n > 0) {
            int rem = n % 10;
            sum = sum + getPower(rem, count);
            n = n / 10;
            count--;
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
