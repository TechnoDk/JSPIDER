
import java.util.Scanner;
public class armstrong {

    public static int getCount(int n){
        int count= 0 ;
        while (n>0) {
            count++;
            n=n/10;   
        }
        return count;
    }
    public static int getPower(int a , int b){
        int pow=1;
        for (int i = 0; i <=b; i++) {
            pow = pow*a;
        }
        return pow;
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

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter  Number:- ");
        int n = sc.nextInt(); // 153
        if (isArmstrong(n)) {
            System.out.println(n + " is an armstrong number");
        } else {
            System.out.println(n + " is not an armstrong number");
        }
    }
    

}
    

