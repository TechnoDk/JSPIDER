import java.util.Scanner;

public class divisible {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Your Number");
        int a = sc.nextInt();
        if (a % 5 == 0) {
            if (a % 11 == 0) {
                System.out.println(a + " Divide by both 11 and 5");
            } else {
                System.out.println(a + " Only  divisible by 5 ");

            }

        } else if (a % 11 == 0) {
            System.out.println(a + " Only divisible by 11 not divisible by 5");
        } else {
            System.out.println(a + " Not divided by Both ");
        }

    }
}
