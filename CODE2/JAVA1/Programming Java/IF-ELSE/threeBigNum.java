import java.util.Scanner;

class threeBigNum {
    public static void main(String[] args) {
        int a;
        int b;
        int c;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter 1st Num");
        a = sc.nextInt();
        System.out.println("Enter 2st Num");
        b = sc.nextInt();
        System.out.println("Enter 3st Num");
        c = sc.nextInt();
        if (a > b && a > c) {
            System.out.println("a is bigger than b and c , a is :-" + a);

        } else if (b > a && b > c) {
            System.out.println("b is bigger than a and c,b is :-" + b);
        } else {
            System.out.println("C is bigger than a and b, C is :-" + c);
        }

    }
}