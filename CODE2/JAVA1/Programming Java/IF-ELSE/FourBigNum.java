import java.util.Scanner;

public class FourBigNum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter 1st number:-");
        int a = sc.nextInt();
        System.out.println("Enter 2st number:-");
        int b = sc.nextInt();
        System.out.println("Enter 3st number:-");
        int c = sc.nextInt();
        System.out.println("Enter 4st number:-");
        int d = sc.nextInt();
        if (a > b && a > c && a > d) {
            System.out.println(" A is :- "+a);

        } else if (b > a && b > c && b > d) {
            System.out.println("B is :- "+b);

        } else if (c > a && c > b && c > d) {
            System.out.println("C is :-" +c);
        } else {
            System.out.println("D is :- "+d);
        }

    }
}
